import '@mantine/carousel/styles.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import gambar1 from '../../../public/gambar1.jpeg';

const images = [
    'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
];
export default function Carousels() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
      const slides = images.map((url) => (
        <Carousel.Slide key={url}>
      <Image src={url} alt='gambar'/>
    </Carousel.Slide>
    ));

    return <Carousel
    withIndicators
    
    height={650}
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
  >
    {slides}
    </Carousel>
    
}