import cx from 'clsx';
import React, { useState, useEffect } from 'react';
import { Table, ScrollArea, Button } from '@mantine/core';
import classes from '../../styles/Table.module.css';
import Modal from '@/components/admin/modal';



export default function Tabel() {
const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Panggil fungsi untuk mendapatkan data dari API unit
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch('/api/unit');
      const result = await response.json();
      setData(result.unit);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const rows = data.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{row.nama}</Table.Td>
      <Table.Td>{row.passengers}</Table.Td>
      <Table.Td>{row.gearbox}</Table.Td>
      <Table.Td>
      <button onClick={() => handleUpdate(row.id)}>Update</button>
      <button onClick={() => handleDelete(row.id)}>Delete</button>
    </Table.Td>
      {/* ... tambahkan sel lain sesuai kebutuhan */}
    </Table.Tr>
  ));

  return (
    <>
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>No.</Table.Th>
            <Table.Th>Nama Mobil</Table.Th>
            <Table.Th>Jumlah Kursi</Table.Th>
            <Table.Th>Gear Box</Table.Th>
            <Table.Th>Aksi</Table.Th>
           
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
     <Modal></Modal>
   </>
  );
}