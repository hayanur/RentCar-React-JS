import { Grid } from '@mantine/core';
import { Container, Center, Title} from '@mantine/core'; 
import Image from 'next/image';
import mitsu from '@/../public/mitsu.png'; 
import honda from '@/../public/honda.png'; 
import toyota from '@/../public/toyota.png'; 

const demoProps = {
    // bg: 'var(--mantine-color-blue-light)',
    h: 400,
  };
export default function Product() {
    return (
        <Container size="sm" {...demoProps}>
            <Grid style={{marginTop: '5%'}}>
                <Grid.Col span={12} pb={20}>
                    <Center maw={700} h={155}>
                        <Title style={{ fontFamily: 'Lilita One, sans-serif', fontWeight: '400', fontSize: 'rem(80px)', lineHeight: '1.1' }}>BRAND YANG KAMI SEWAKAN</Title>
                    </Center>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={4}>
                    <Center maw={400} h={140}>
                        <Image 
                        src={mitsu}
                        style={{ objectFit: 'contain', maxWidth: '95%', maxHeight: '95%' }}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Center maw={400} h={140}>
                        <Image 
                        src={honda}
                        style={{ objectFit: 'contain', maxWidth: '105%', maxHeight: '105%', marginTop: '13%'}}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Center maw={400} h={140}>
                        <Image 
                        src={toyota}
                        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', marginTop: '10%'}}
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
    )
}