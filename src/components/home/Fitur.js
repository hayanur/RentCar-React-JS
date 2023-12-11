import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from '../../styles/Fitur.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Layanan Ambil Sendiri',
    description:
      'Nikmati kenyamanan dan fleksibilitas dengan layanan sewa mobil ambil sendiri kami. Dengan opsi ini, Anda dapat mengambil kendaraan sewa pilihan langsung dari lokasi kami, memungkinkan Anda untuk memiliki kendali penuh atas jadwal perjalanan Anda.',
  },
  {
    icon: IconUser,
    title: 'Layanan Antar Ke Rumah',
    description:
      'Sempurnakan pengalaman perjalanan Anda dengan layanan sewa mobil kami yang menyediakan pengantaran langsung ke pintu rumah Anda. Kami memberikan kemudahan dan kenyamanan, memastikan kendaraan pilihan Anda tiba tepat di depan pintu, sehingga Anda dapat memulai perjalanan tanpa repot.',
  },
  {
    icon: IconCookie,
    title: 'Layanan Cash On Delivery',
    description:
      'Nikmati kemudahan dan fleksibilitas dengan layanan sewa mobil Cash On Delivery (COD) kami. Pesan kendaraan pilihan Anda dan bayar secara langsung saat mobil diantar ke lokasi yang Anda inginkan. Pengalaman menyewa mobil menjadi lebih praktis dan tanpa kerumitan dengan pilihan pembayaran COD.',
  },
];



export function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function Fitur() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Layanan Yang Kami Sediakan</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
        Website rental mobil adalah platform online yang menyediakan layanan penyewaan mobil kepada pengguna. 


        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}