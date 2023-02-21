import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import Detail from "./Detail";

interface ParkingDataType {
  ADDR: string;
  PARKING_NAME: string;
  PARKING_CODE: string;
  PAY_NM: string;
  TEL: string;
  LAT: string;
  LNG: string;
}

function App() {
  const [parkingData, setParkingData] = useState<ParkingDataType[]>([]);
  const query = useQuery("parking", async () =>
    (
      await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/GetParkInfo/1/500/`
      )
    ).json()
  );

  useEffect(() => {
    if (query.status === "success") {
      for (let i = 0; i < query.data.GetParkInfo.row.length; i++) {
        if (
          query.data.GetParkInfo.row[i]?.PARKING_CODE ===
          query.data.GetParkInfo.row[i + 1]?.PARKING_CODE
        ) {
          query.data.GetParkInfo.row.splice(i, 1);
          i--;
        }
      }
      setParkingData(query.data.GetParkInfo.row);
    }
  }, [query.status]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home parkingData={parkingData} />} />
        <Route path="/:index" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
