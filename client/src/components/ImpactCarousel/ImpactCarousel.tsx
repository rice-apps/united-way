import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

/* import mantine ui components needed for the impact carousel object */
// import "@mantine/core/styles.css";
// import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./carousel.css";

import { MantineProvider } from "@mantine/core";
import ImpactCards from "../../pages/ImpactCards/ImpactCards";
import donationImpact from "../../assets/donation.jpeg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img1.png";

// const theme = createTheme({
//   fontFamily: "Open Sans, sans-serif",
//   // primaryColor: "cyan",
// });

interface MyData {
  dollarsRaised: number;
  stability: number;
  development: number;
  healthcare: number;
  escape: number;
  basicNeeds: number;
  totalPeople: number;
}

function ImpactCarousel({
  dollarsRaised,
  stability,
  development,
  healthcare,
  escape,
  basicNeeds,
  totalPeople,
}: MyData) {
  return (
    /* create a new carousel object with the given design components */
    <div
      // data-theme="dark"
      className="w-full"
      // style={{ height: 400, display: "flex", margin: 100 }}
    >
      <MantineProvider>
        <Carousel
          withIndicators
          height="100%"
          style={{ flex: 1 }}
          /* height={200} */
          // slideSize = "500"
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap="lg"
          /* slideGap={{ base: 0, sm: 'md' }} */
          align="start"
          controlsOffset="md"
          controlSize={50}
          loop
          dragFree
          nextControlIcon={
            <IconArrowRight
              style={{
                width: rem(16),
                height: rem(16),
                color: "white",
              }}
            />
          }
          previousControlIcon={
            <IconArrowLeft
              style={{ width: rem(16), height: rem(16), color: "white" }}
            />
          }
        >
          {/* fill the carousel with slides */}
          <Carousel.Slide>
            <ImpactCards
              imgURL={donationImpact}
              numData={stability}
              unitText={"Stability"}
              descText={"got support to achieve financial statbility"}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              2
            </h1>
            <ImpactCards
              imgURL={img1}
              numData={development}
              unitText={"Development"}
              descText={"helped to succeed in school and in life"}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              3
            </h1>
            <ImpactCards
              imgURL={img2}
              numData={healthcare}
              unitText={"Healthcare"}
              descText={"recieved physical and behavioral health card support"}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              3
            </h1>
            <ImpactCards
              imgURL={img2}
              numData={escape}
              unitText={"Escape"}
              descText={"recieved physical and behavioral health card support"}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              3
            </h1>
            <ImpactCards
              imgURL={img2}
              numData={basicNeeds}
              unitText={"Basic Needs"}
              descText={"recieved physical and behavioral health card support"}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              3
            </h1>
            <ImpactCards
              imgURL={img2}
              numData={totalPeople}
              unitText={"Total People"}
              descText={"recieved physical and behavioral health card support"}
            />
          </Carousel.Slide>
          {/* <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              4
            </h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: 25 }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "45%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              5
            </h1>
            <img
              src="https://coolbackgrounds.io/images/backgrounds/blue/blue-background-088FDC-8ecd0503.jpg"
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: 25 }}
            />
          </Carousel.Slide> */}
          {/* 
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
        <Carousel.Slide>Slide 4</Carousel.Slide>
        */}
        </Carousel>
      </MantineProvider>
    </div>
  );
}

/* export the carousel object */
export default ImpactCarousel;
