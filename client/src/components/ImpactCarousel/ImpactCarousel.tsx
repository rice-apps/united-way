import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { useEffect } from "react";

/* import mantine ui components needed for the impact carousel object */
// import "@mantine/core/styles.css";
// import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./carousel.css";

import { MantineProvider } from "@mantine/core";
import ImpactCards from "../../pages/ImpactCards/ImpactCards";
// import img2 from "../../assets/img2.png";

import needs from "../../assets/violence.png";
import violence from "../../assets/violence.png";
import health from "../../assets/health.png";
import youth from "../../assets/youth.png";
import financial from "../../assets/financial.png";
import totalPeopleImg from "../../assets/totalPeople.png";

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
  // get the carousel element
  let carousel: HTMLDivElement | null;

  // put all of the divs into an array
  let carouselElements: HTMLCollectionOf<HTMLDivElement> | undefined

  useEffect(() => {
    carousel = document.getElementById("carousel") as HTMLDivElement

    carouselElements = carousel?.children as HTMLCollectionOf<HTMLDivElement>

    updateCarousel(0)
  }, [])

  let activeIndex = 0

  /* updateCarousel function, which is called when the right/left buttons are clicked */
  /* switches the way the 5 impact cards are displayed */
  function updateCarousel(newIndex: number): void {
    console.log(newIndex)
    console.log(carouselElements)

    if (!carouselElements) return

    // check if the index is out of bounds
    if (newIndex < 0) newIndex = carouselElements.length - 1
    else if (newIndex >= carouselElements.length) newIndex = 0

    // update the active index
    const previousIndex = activeIndex
    activeIndex = newIndex

    // update the carousel elements
    for (let i = 0; i < carouselElements.length; i++) {
      // get the current element
      const currentElement = carouselElements[i]

      /* change the order of cards on top of each other */
      if (currentElement.classList.contains(`z-${50 - Math.abs(i - previousIndex) * 10}`)) {
        currentElement.classList.replace(
          `z-${50 - Math.abs(i - previousIndex) * 10}`,
          `z-${50 - Math.abs(i - activeIndex) * 10}`
        )
      } else {
        currentElement.classList.add(
          `z-${50 - Math.abs(i - activeIndex) * 10}`
        )
      }

      /* change the brightness of cards not in the front */
      if (currentElement.classList.contains(`brightness-${100 - Math.abs(i - previousIndex) * 25}`)) {
        currentElement.classList.replace(
          `brightness-${100 - Math.abs(i - previousIndex) * 25}`,
          `brightness-${100 - Math.abs(i - activeIndex) * 25}`
        )
      } else {
        currentElement.classList.add(
          `brightness-${100 - Math.abs(i - activeIndex) * 25}`
        )
      }

      /* change the location of cards/move them over so they are stacked on top of each other */
      if (currentElement.classList.contains(`${i - previousIndex > 0 ? "translate-x" : "-translate-x"}-${Math.abs(i - previousIndex) * 10}`)) {
        currentElement.classList.replace(
          `${i - previousIndex > 0 ? "translate-x" : "-translate-x"}-${Math.abs(i - previousIndex) * 10}`,
          `${i - activeIndex > 0 ? "translate-x" : "-translate-x"}-${Math.abs(i - activeIndex) * 10}`
        )
      } else {
        currentElement.classList.add(
          `${i - activeIndex > 0 ? "translate-x" : "-translate-x"}-${Math.abs(i - activeIndex) * 10}`
        )
      }
      
      /* change the scale/size of cards */
      if (currentElement.classList.contains(`scale-${100 - Math.abs(i - previousIndex) * 10}`)) {
        currentElement.classList.replace(
          `scale-${100 - Math.abs(i - previousIndex) * 10}`,
          `scale-${100 - Math.abs(i - activeIndex) * 10}`
        )
      }
      else {
        currentElement.classList.add(
          `scale-${100 - Math.abs(i - activeIndex) * 10}`
        )
      }

      // translate-x-40 translate-x-30 translate-x-20 translate-x-10 translate-x-0 -translate-x-10 -translate-x-20 -translate-x-30 -translate-x-40 z-50 z-40 z-30 z-20 z-10 brightness-100 brightness-75 brightness-50 brightness-25 brightness-0 scale-100 scale-90 scale-80 scale-70 scale-60
    }
  }
  /* creating a carousel element from scratch */
  return (
    <div className="flex w-full place-items-center">
      {/* click left button */}
      <button onClick={
        () => updateCarousel(activeIndex - 1)
      } className="btn btn-circle">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7L10 12L15 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* a carousel with 5 cards, styling included */}
      <div id="carousel" className="grow grid justify-center items-center h-full">
        <div className="card-wrapper">
          <ImpactCards
            imgURL={youth}
            numData={development}
            unitText={"Youth Development"}
            descText={"Supporting youth to succeed in school and in life"}
          />
        </div>
        <div className="card-wrapper">
          <ImpactCards
            imgURL={health}
            numData={healthcare}
            unitText={"Health Care"}
            descText={"Support people undergoing health care support"}
          />
        </div>
        <div className="card-wrapper">
          <ImpactCards
            imgURL={violence}
            numData={escape}
            unitText={"Escape from Violence"}
            descText={"Support people to escape violent situations"}
          />
        </div>
        <div className="card-wrapper">
          <ImpactCards
            imgURL={needs}
            numData={basicNeeds}
            unitText={"Basic Needs"}
            descText={"Support people with basic needs like food and shelter"}
          />
        </div>
        <div className="card-wrapper">
          <ImpactCards
            imgURL={totalPeopleImg}
            numData={totalPeople}
            unitText={"Total People"}
            descText={
              "Number of people whose lives you've improved via our services"
            }
          />
        </div>
      </div>

      {/* click right button */}
      <button onClick={
        () => updateCarousel(activeIndex + 1)
      } className="btn btn-circle">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )

  /* creating a carousel element using mantine ui */
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
              imgURL={financial}
              numData={stability}
              unitText={"Financial Stability"}
              descText={"Supported families to achieve financial stability"}
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
              imgURL={youth}
              numData={development}
              unitText={"Youth Development"}
              descText={"Supporting youth to succeed in school and in life"}
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
              imgURL={health}
              numData={healthcare}
              unitText={"Health Care"}
              descText={"Support people undergoing health care support"}
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
              imgURL={violence}
              numData={escape}
              unitText={"Escape from Violence"}
              descText={"Support people to escape violent situations"}
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
              imgURL={needs}
              numData={basicNeeds}
              unitText={"Basic Needs"}
              descText={"Support people with basic needs like food and shelter"}
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
              imgURL={totalPeopleImg}
              numData={totalPeople}
              unitText={"Total People"}
              descText={
                "Number of people whose lives you've improved via our services"
              }
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

  <div className="">
    </div>
}

/* export the carousel object */
export default ImpactCarousel;
