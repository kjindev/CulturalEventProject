import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Home from "./Home";
import Detail from "./Detail";
import { useDispatch } from "react-redux";
import {
  musicalDataUpdate,
  movieDataUpdate,
  classicDataUpdate,
  educationDataUpdate,
  concertDataUpdate,
} from "./dataSlice";

interface dataType {
  CODENAME: string;
  GUNAME: string;
  MAIN_IMG: string;
  TITLE: string;
  DATE: string;
  PLACE: string;
}

function App() {
  const [data, setdata] = useState<dataType[]>([]);
  let musicalData: dataType[] = [];
  let movieData: dataType[] = [];
  let classicData: dataType[] = [];
  let educationData: dataType[] = [];
  let concertData: dataType[] = [];

  const dispatch = useDispatch();
  const query = useQuery("culture", async () =>
    (
      await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/culturalEventInfo/1/300/`
      )
    ).json()
  );

  useEffect(() => {
    if (query.status === "success") {
      setdata(query.data.culturalEventInfo.row);
    }
  }, [query.status]);

  useEffect(() => {
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].CODENAME === "뮤지컬/오페라" ||
          data[i].CODENAME === "독주/독창회" ||
          data[i].CODENAME === "연극"
        ) {
          musicalData.push(data[i]);
        } else if (data[i].CODENAME === "영화") {
          movieData.push(data[i]);
        } else if (
          data[i].CODENAME === "클래식" ||
          data[i].CODENAME === "국악" ||
          data[i].CODENAME === "무용"
        ) {
          classicData.push(data[i]);
        } else if (
          data[i].CODENAME === "교육/체험" ||
          data[i].CODENAME === "전시/미술"
        ) {
          educationData.push(data[i]);
        } else if (
          data[i].CODENAME === "콘서트" ||
          data[i].CODENAME === "축제"
        ) {
          concertData.push(data[i]);
        }
      }
      dispatch(musicalDataUpdate(musicalData));
      dispatch(movieDataUpdate(movieData));
      dispatch(classicDataUpdate(classicData));
      dispatch(educationDataUpdate(educationData));
      dispatch(concertDataUpdate(concertData));
    }
  }, [data]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/:name/:index" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
