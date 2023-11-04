import React, { useState, useEffect } from "react";
import ImpactCards from "../../pages/ImpactCards/ImpactCards.tsx";
import donationImpact from "../../assets/donation.jpeg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img1.png";

// import axios from "axios";
interface MyData {
  dollarsRaised: number;
  stability: number;
  development: number;
  healthcare: number;
  escape: number;
  basicNeeds: number;
  totalPeople: number;
}
// const apiURL = "http://localhost:5000"
function Home() {
  const [data, setData] = useState<MyData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/");
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        console.log(res);
        const resJSON = await res.json();
        console.log(resJSON);
        setData(resJSON);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {typeof data === "undefined" ? (
          <p>loading...</p>
        ) : (
          <div className="flex flex-row">
            <ImpactCards
              imgURL={donationImpact}
              numData={data.basicNeeds}
              unitText={"families"}
              descText={"got support to achieve financial statbility"}
            />
            <ImpactCards
              imgURL={img1}
              numData={data.development}
              unitText={"young people"}
              descText={"helped to succeed in school and in life"}
            />
            <ImpactCards
              imgURL={img2}
              numData={data.totalPeople}
              unitText={" people"}
              descText={"recieved physical and behavioral health card support"}
            />
          </div>
          // data.members.map((member, i) => {
          //   <p key={i}>{member}</p>;
          // })
        )}
      </div>
    </>
  );
}

export default Home;
