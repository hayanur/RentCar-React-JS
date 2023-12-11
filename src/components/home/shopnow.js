import { Grid } from '@mantine/core';
import { Container, Center, Title, Flex, Button} from '@mantine/core'; 
import Image from 'next/image';
import logo from '@/../public/logo.png'; 

const demoProps = {
    // bg: 'gray 5',
    h: 450,
    mt: 'md',
  };

  export default function Shopnow() {
    return (
        <Container 
        {...demoProps}
        fluid 
        style={{backgroundColor: '#ECECEC'}}>
             <Grid>
                <Grid.Col span={6}>
                    <Flex
                    mih={450}
                    gap="md"
                    justify="flex-end"
                    align="center"
                    direction="row"
                    wrap="wrap">
                        <Image 
                        src={logo}
                        style={{ objectFit: 'contain', maxWidth: '70%', maxHeight: '70%', marginTop: '-3%', marginRight: '3%'}}>
                        </Image>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Flex
                    mih={450}
                    // bg="rgba(0, 0, 0, .3)"
                    gap="xl"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap">
                        <Title style={{ fontFamily: 'Lilita One, sans-serif', fontWeight: '600', fontSize: 'rem(70px)', lineHeight: '1.1', color: '#62A4F1', marginTop: '15%'}}>-CAR RENT-</Title>
                        <Title style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px', marginTop: '-2%'}}>Temukan pengalaman berkendara yang tak terlupakan dengan armada mobil terbaik kami. Dengan pilihan kendaraan yang modern dan layanan pelanggan terpercaya, kami siap membantu perjalanan Anda menjadi lebih menyenangkan.</Title>
                        <Title style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px', marginTop: '-2%'}}>Tidak sabar untuk memulai perjalanan Anda? Rental Sekarang! dan nikmati kenyamanan tanpa batas.</Title>
                        <Button size='md'>Pesan!</Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Container>
    )
}