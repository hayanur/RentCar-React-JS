import { query } from "@/lib/db";

export default async function handler(req, res) {
    let unit;
    let message;
    if (req.method === "GET") {
        const unit = await query({
            query: "SELECT * FROM unit",
            values: [],
        });

        res.status(200).json({ unit: unit});
    }

    if (req.method === "POST") {
        const unitName = req.body.unit_name;
        const unitPassengers = req.body.unit_passengers;
        const unitGearbox = req.body.unit_gearbox;
        const addUnit = await query({
            query: "INSERT INTO unit (nama, passengers, gearbox) VALUES (?, ?, ?)",
            values: [unitName, unitPassengers, unitGearbox],
        });
        if (addUnit.insertId) {
            message = "succes";
        } else {
            message = "error";
        }
        let unit = {
            unit_id: addUnit.insertId,
            unit_name: unitName,
            unit_passengers: unitPassengers,
            unit_gearbox: unitGearbox,
        };
        res.status(200).json({ response: { message: message, unit: unit}});
    }
}