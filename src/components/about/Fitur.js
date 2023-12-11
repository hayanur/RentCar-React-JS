import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, IconHanger2, IconBrandCraft  } from '@tabler/icons-react';
import classes from '../../styles/Fitur.module.css';

export const MOCKDATA = [

];


export default function Fitur() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Tentang Kami</Title>

      <Container size={800} p={0}>
        <Text size="lg" className={classes.description}>
        Selamat datang di CarRent, platform daring yang menyediakan layanan penyewaan mobil secara online. Kami hadir untuk memudahkan Anda dalam menemukan dan menyewa mobil sesuai kebutuhan Anda. Jelajahi flotil mobil berkualitas kami dan nikmati pengalaman menyewa mobil yang nyaman dan aman. CarRent, solusi praktis untuk perjalanan Anda. 
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