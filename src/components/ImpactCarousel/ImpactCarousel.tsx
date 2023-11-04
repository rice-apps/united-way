import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    /* create a new carousel object with the given design components */
    <div style={{ height: 400, display: 'flex', margin: 100 }}>
      <Carousel
        withIndicators
        height="100%"
        style={{ flex: 1 }}
        /* height={200} */
        // slideSize = "500"
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap="xl"
        /* slideGap={{ base: 0, sm: 'md' }} */
        align="start"
        controlsOffset="md"
        controlSize={50}
        
        loop
        dragFree

        nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
      >
        {/* fill the carousel with slides */}
        <Carousel.Slide>
            <h1 style={{color:'white', position: "absolute", top: '45%', left: '45%', transform: "translate(-50%, -50%)"}}>1</h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius:25}}
            />
        </Carousel.Slide>
        <Carousel.Slide>
        <h1 style={{color:'white', position: "absolute", top: '45%', left: '45%', transform: "translate(-50%, -50%)"}}>2</h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius:25 }}
            />
        </Carousel.Slide>
        <Carousel.Slide>
        <h1 style={{color:'white', position: "absolute", top: '45%', left: '45%', transform: "translate(-50%, -50%)"}}>3</h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius:25 }}
            />
        </Carousel.Slide>
        <Carousel.Slide>
        <h1 style={{color:'white', position: "absolute", top: '45%', left: '45%', transform: "translate(-50%, -50%)"}}>4</h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius:25 }}
            />
        </Carousel.Slide>
        <Carousel.Slide>
        <h1 style={{color:'white', position: "absolute", top: '45%', left: '45%', transform: "translate(-50%, -50%)"}}>5</h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius:25 }}
            />
        </Carousel.Slide>
        {/* 
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
        <Carousel.Slide>Slide 4</Carousel.Slide>
        */}
      </Carousel>
    </div>
  );
}

/* export the carousel object */
export default Demo;