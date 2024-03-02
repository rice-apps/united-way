import { useRef, useEffect } from "react"
import ImpactCards from "./ImpactCards"
import type { ProportionsMap } from '../utils'

function ImpactCarousel({
  dollarsRaised,
  stability,
  development,
  healthcare,
  escape,
  basicNeeds,
  totalPeople,
}: ProportionsMap) {
  const carouselRef = useRef<HTMLDivElement>(null)

  // get the carousel element
  let carousel: HTMLDivElement | null

  // put all of the divs into an array
  let carouselElements: HTMLCollectionOf<HTMLDivElement> | undefined

  useEffect(() => {
    if (carouselRef.current) {
      carouselElements = carouselRef.current
        .children as HTMLCollectionOf<HTMLDivElement>
    }

    updateCarousel(0)
  }, [])

  const carouselData = [
    {
      imgURL: "/cards/youth.png",
      numData: development * dollarsRaised,
      unitText: "Youth Development",
      descText: "Supporting youth to succeed in school and in life",
    },
    {
      imgURL: "/cards/health.png",
      numData: healthcare * dollarsRaised,
      unitText: "Health Care",
      descText: "Support people undergoing health care support",
    },
    {
      imgURL: "/cards/violence.png",
      numData: escape * dollarsRaised,
      unitText: "Escape from Violence",
      descText: "Support people to escape violent situations",
    },
    {
      imgURL: "/cards/needs.png",
      numData: basicNeeds * dollarsRaised,
      unitText: "Basic Needs",
      descText: "Support people with basic needs like food and shelter",
    },
    {
      imgURL: "/cards/totalPeople.png",
      numData: totalPeople * dollarsRaised,
      unitText: "Total People",
      descText: "Number of people whose lives you've improved via our services",
    },
  ]

  let activeIndex = 0

  /* updateCarousel function, which is called when the right/left buttons are clicked */
  /* switches the way the 5 impact cards are displayed */
  function updateCarousel(newIndex: number): void {
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
      if (
        currentElement.classList.contains(
          `z-${50 - Math.abs(i - previousIndex) * 10}`,
        )
      ) {
        currentElement.classList.replace(
          `z-${50 - Math.abs(i - previousIndex) * 10}`,
          `z-${50 - Math.abs(i - activeIndex) * 10}`,
        )
      } else {
        currentElement.classList.add(`z-${50 - Math.abs(i - activeIndex) * 10}`)
      }

      /* change the brightness of cards not in the front */
      if (
        currentElement.classList.contains(
          `brightness-${100 - Math.abs(i - previousIndex) * 25}`,
        )
      ) {
        currentElement.classList.replace(
          `brightness-${100 - Math.abs(i - previousIndex) * 25}`,
          `brightness-${100 - Math.abs(i - activeIndex) * 25}`,
        )
      } else {
        currentElement.classList.add(
          `brightness-${100 - Math.abs(i - activeIndex) * 25}`,
        )
      }

      /* change the location of cards/move them over so they are stacked on top of each other */
      if (
        currentElement.classList.contains(
          `${i - previousIndex > 0 ? "translate-x" : "-translate-x"}-${
            Math.abs(i - previousIndex) * 10
          }`,
        )
      ) {
        currentElement.classList.replace(
          `${i - previousIndex > 0 ? "translate-x" : "-translate-x"}-${
            Math.abs(i - previousIndex) * 10
          }`,
          `${i - activeIndex > 0 ? "translate-x" : "-translate-x"}-${
            Math.abs(i - activeIndex) * 10
          }`,
        )
      } else {
        currentElement.classList.add(
          `${i - activeIndex > 0 ? "translate-x" : "-translate-x"}-${
            Math.abs(i - activeIndex) * 10
          }`,
        )
      }

      /* change the scale/size of cards */
      if (
        currentElement.classList.contains(
          `scale-${100 - Math.abs(i - previousIndex) * 10}`,
        )
      ) {
        currentElement.classList.replace(
          `scale-${100 - Math.abs(i - previousIndex) * 10}`,
          `scale-${100 - Math.abs(i - activeIndex) * 10}`,
        )
      } else {
        currentElement.classList.add(
          `scale-${100 - Math.abs(i - activeIndex) * 10}`,
        )
      }

      // translate-x-40 translate-x-30 translate-x-20 translate-x-10 translate-x-0 -translate-x-10 -translate-x-20 -translate-x-30 -translate-x-40 z-50 z-40 z-30 z-20 z-10 brightness-100 brightness-75 brightness-50 brightness-25 brightness-0 scale-100 scale-90 scale-80 scale-70 scale-60
    }
  }
  /* creating a carousel element from scratch */
  return (
    <div className="flex w-full place-items-center">
      {/* click left button */}
      <button
        onClick={() => updateCarousel(activeIndex - 1)}
        className="btn btn-circle"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 7L10 12L15 17"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* a carousel with 5 cards, styling included */}
      <div
        id="carousel"
        className="grow grid justify-center items-center h-full"
        ref={carouselRef}
      >
        {carouselData.map((data, index) => (
          <div className="row-start-1 col-start-1 transition-all" key={index}>
            <ImpactCards
              imgURL={data.imgURL}
              numData={data.numData}
              unitText={data.unitText}
              descText={data.descText}
            />
          </div>
        ))}
      </div>

      {/* click right button */}
      <button
        onClick={() => updateCarousel(activeIndex + 1)}
        className="btn btn-circle"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 7L15 12L10 17"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

/* export the carousel object */
export default ImpactCarousel
