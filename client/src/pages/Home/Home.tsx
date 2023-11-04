import { useState, useEffect } from "react";
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
      <a className=" normal-case text-m">Home Page</a>
      <button className="btn">Button</button>
      <div>
        {typeof data === "undefined" ? (
          <p>loading...</p>
        ) : (
          data.dollarsRaised
          // data.members.map((member, i) => {
          //   <p key={i}>{member}</p>;
          // })
        )}
      </div>
    </>
  );
}

export default Home;
