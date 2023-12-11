import { Card, Text, Group, Badge, Center, Button, Container, Grid, Title, Flex } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import Image from 'next/image';
import classes from '../../styles/Unit.module.css';
import pajero from '@/../public/pajero5.jpg';  // Remove the '../../../public' part
import civic from '@/../public/civic.webp';  // Remove the '../../../public' part

  const items = [
    {
      id: 1,
      title: 'Mitsubishi Pajero',
      description: 'Free recharge at any station',
      imageUrl: pajero,
      discount: 25,
      features: [
        { label: '4 passengers', icon: IconUsers },
        { label: '100 km/h in 4 seconds', icon: IconGauge },
        { label: 'Automatic gearbox', icon: IconManualGearbox },
        { label: 'Electric', icon: IconGasStation },
      ],
      price: 400000,
      priceInfo: '/24 jam',
    },
    {
      id: 2,
      title: 'Honda Civic',
      description: 'Free recharge at any station',
      imageUrl: civic,
      discount: 25,
      features: [
        { label: '4 passengers', icon: IconUsers },
        { label: '100 km/h in 4 seconds', icon: IconGauge },
        { label: 'Automatic gearbox', icon: IconManualGearbox },
        { label: 'Electric', icon: IconGasStation },
      ],
      price: 400000,
      priceInfo: '/24 jam',
    },
    {
      id: 3,
      title: 'Mitsubishi Pajero',
      description: 'Free recharge at any station',
      imageUrl: pajero,
      discount: 25,
      features: [
        { label: '4 passengers', icon: IconUsers },
        { label: '100 km/h in 4 seconds', icon: IconGauge },
        { label: 'Automatic gearbox', icon: IconManualGearbox },
        { label: 'Electric', icon: IconGasStation },
      ],
      price: 400000,
      priceInfo: '/24 jam',
    },
    // ... tambahkan item lainnya sesuai kebutuhan Anda
  ];
  const Unit = () => {
  return (
    <Container fluid style={{backgroundColor: '#62A4F1', paddingBottom: '50px'}}>
      <Container >
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap">
            <Title style={{ fontFamily: 'Lilita One, sans-serif', fontWeight: '400', fontSize: '40px', lineHeight: '1.1', color: '#F1F3F5', marginTop: '10%', paddingBottom: '3%'}}>UNIT TERBARU</Title>
        </Flex>
    <Grid gutter="xl">
      {items.map((item) => (
        <Grid.Col key={item.id} span={4}>
          <Card withBorder radius="md" mt={20} className={classes.card} style={{ overflow: 'hidden' }}>
            <Card.Section className={classes.imageSection}>
              <Image src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card.Section>

            <Group justify="space-between" mt="md">
              <div>
                <Text fw={500}>{item.title}</Text>
                <Text fz="xs" c="dimmed">
                  {item.description}
                </Text>
              </div>
              <Badge variant="outline">{item.discount}% off</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
              <Text fz="sm" c="dimmed" className={classes.label}>
                Basic configuration
              </Text>

              <Group gap={8} mb={-8}>
                    {item.features.map((feature, index) => (
                      <Center key={index}>
                        <feature.icon
                          size="1.05rem"
                          className={classes.icon}
                          stroke={1.5}
                        />
                        <Text size="xs">{feature.label}</Text>
                      </Center>
                    ))}
                  </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
              <Group gap={30}>
                <div>
                  <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                    Rp. {item.price}
                  </Text>
                  <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                    {item.priceInfo}
                  </Text>
                </div>

                <Button radius="xl" style={{ flex: 1 }} color='#62A4F1'>
                  Rent Now
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
        </Container>
    </Container>
  );
}
export default Unit;