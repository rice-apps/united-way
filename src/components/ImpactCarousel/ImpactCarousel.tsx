import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    /* create a new carousel object with the given design components */
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap="xl"
      /* slideGap={{ base: 0, sm: 'md' }} */
      align="center"
      controlsOffset="lg"
      controlSize={40}
      loop
      dragFree
      
      color="indigo"
    >
        {/* fill the carousel with slides */}
      <Carousel.Slide>Slide 1</Carousel.Slide>
      <Carousel.Slide>Slide 2</Carousel.Slide>
      <Carousel.Slide>Slide 3</Carousel.Slide>
      <Carousel.Slide>Slide 4</Carousel.Slide>
    </Carousel>
  );
}

/* export the carousel object */
export default Demo;