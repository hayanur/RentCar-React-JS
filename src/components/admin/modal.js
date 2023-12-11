import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Input, Select } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import cx from 'clsx';

export default function Insert() {
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState({
    nomor: '',
    namaMobil: '',
    jumlahKursi: '',
    gearbox: '',
  });

  // Pilihan gearbox
  const gearboxOptions = [
    { label: 'Automatis', value: 'automatis' },
    { label: 'Manual', value: 'manual' },
  ];

  // Fungsi untuk menghandle perubahan nilai formulir
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fungsi untuk menangani submit formulir
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Server response:', result);

        // Lakukan sesuatu setelah submit berhasil, misalnya, menampilkan pesan sukses
      } else {
        // Tangani kasus jika respons tidak ok, misalnya, menampilkan pesan error
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // Tutup modal setelah submit, terlepas dari hasilnya
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Tambah Mobil">
        {/* Isi modal dengan formulir-formulir */}
        <form>
          <Input
            label="Nomor"
            placeholder="Masukkan Nomor"
            name="nomor"
            value={formData.nomor}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Nama Mobil"
            placeholder="Masukkan Nama Mobil"
            name="namaMobil"
            value={formData.namaMobil}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Jumlah Kursi"
            placeholder="Masukkan Jumlah Kursi"
            name="jumlahKursi"
            type="number"
            value={formData.jumlahKursi}
            onChange={handleInputChange}
            required
          />
          <Select
            label="Gearbox"
            placeholder="Pilih Gearbox"
            data={gearboxOptions}
            value={formData.gearbox}
            onChange={(value) => setFormData((prevData) => ({ ...prevData, gearbox: value }))}
            required
          />
          <Button onClick={handleSubmit} color="blue">
            Submit
          </Button>
        </form>
      </Modal>

      <Button onClick={open}>Tambah Mobil</Button>
    </>
  );
}
