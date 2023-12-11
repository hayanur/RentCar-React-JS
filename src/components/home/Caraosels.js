import '@mantine/carousel/styles.css';
import '@/styles/CardCarousels.module.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
// import { Image } from '@mantine/core';
import Image from 'next/image';
import gambar1 from '@/../public/pajero5.jpg';  // Remove the '../../../public' part
import gambar2 from '@/../public/avanza.png';  // Remove the '../../../public' part
import gambar3 from '@/../public/civic.webp';  // Remove the '../../../public' part


const images = [
    gambar1, gambar2, gambar3
];
export default function Carousels() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
      const slides = images.map((url) => (
      <Carousel.Slide key={url}>
         <div>
          <Image 
              className="carousel-image" // Tambahkan class di sini
              src={url}
              alt="gambar"
              layout="fill"
              objectPosition="center"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
          />
        </div>   
    </Carousel.Slide>
    ));

    return <Carousel
    withIndicators
    
    height={550}
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
  >
    {slides}
    </Carousel>
    
}