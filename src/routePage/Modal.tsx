import { useEffect, useRef, useState } from "react";
import { BsXCircle, BsChatRightDotsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { recommendDataUpdate } from "../store/dataSlice";
import { modalVisible, fadeinEffect } from "../store/effectSlice";
import { useQueryClient } from "react-query";
import { RootState } from "../store/store";

interface DataType {
  CODENAME: string;
  GUNAME: string;
  MAIN_IMG: string;
  TITLE: string;
}

interface QueryType {
  status: string;
  data: { culturalEventInfo: { row: DataType[] } };
}

export default function Modal() {
  const queryClient = useQueryClient();
  const query = queryClient.getQueryState("culture") as QueryType;

  const [firstRecommend, setFirstRecommend] = useState<DataType>();
  const [popUp, setPopUp] = useState(false);
  const fadeinRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => {
    return state.counter;
  });
  const data = useSelector((state: RootState) => {
    return state.data;
  });
  const effect = useSelector((state: RootState) => {
    return state.effect;
  });

  useEffect(() => {
    if (query.status === "success" && query.data) {
      const cultureData = query.data.culturalEventInfo.row;
      const randomNumber = Math.ceil(Math.random() * cultureData.length);
      setFirstRecommend(cultureData[randomNumber]);
    }
  }, [query.status]);

  useEffect(() => {
    if (effect.modalState === false) {
      if (count.musicalCnt >= 3) {
        dispatch(fadeinEffect(true));
        dispatch(
          recommendDataUpdate(
            data.musicalData[Math.ceil(Math.random() * data.musicalData.length)]
          )
        );
      } else if (count.movieCnt >= 3) {
        dispatch(fadeinEffect(true));
        dispatch(
          recommendDataUpdate(
            data.movieData[Math.ceil(Math.random() * data.movieData.length)]
          )
        );
      } else if (count.classicCnt >= 3) {
        dispatch(fadeinEffect(true));
        dispatch(
          recommendDataUpdate(
            data.classicData[Math.ceil(Math.random() * data.classicData.length)]
          )
        );
      } else if (count.educationCnt >= 3) {
        dispatch(fadeinEffect(true));
        dispatch(
          recommendDataUpdate(
            data.educationData[
              Math.ceil(Math.random() * data.educationData.length)
            ]
          )
        );
      } else if (count.concertCnt >= 3) {
        dispatch(fadeinEffect(true));
        dispatch(
          recommendDataUpdate(
            data.concertData[Math.ceil(Math.random() * data.concertData.length)]
          )
        );
      }
    }
  }, [count]);

  useEffect(() => {
    if (effect.fadeinState === true) {
      setPopUp(true);
      fadeinRef.current?.classList.add("fadein-effect");
      fadeinRef.current?.classList.remove("hidden");
      dispatch(modalVisible(true));
    }
  }, [effect.modalState]);

  return (
    <div ref={fadeinRef} className="z-[1]">
      <div className="fixed bottom-0 right-0 drop-shadow-lg m-3">
        {popUp ? (
          <div className="flex flex-col items-center w-[60vw] md:w-[30vw] h-[60vh] bg-white rounded-lg">
            <div className="w-[100%] flex flex-col items-center p-2 md:p-5">
              <div
                onClick={() => {
                  setPopUp(false);
                  dispatch(fadeinEffect(false));
                }}
                className="hover:cursor-pointer self-end"
              >
                <BsXCircle />
              </div>
              <div className="text-base md:text-lg mt-2">
                [추천] 이런 문화행사는 어때요?
              </div>
            </div>
            {data.recommendData.TITLE ? (
              <Link
                to={`${data.recommendData.GUNAME}/${
                  new Date().getTime() + Math.ceil(Math.random() * 100)
                }`}
                state={{
                  codename: data.recommendData.CODENAME,
                  guname: data.recommendData.GUNAME,
                  img: data.recommendData.MAIN_IMG,
                  title: data.recommendData.TITLE,
                }}
                data-codename={data.recommendData.CODENAME}
                className="w-[100%] h-[100%] flex flex-col items-center"
              >
                <img
                  src={data.recommendData.MAIN_IMG}
                  className="w-[90%] h-[60%] object-cover"
                />
                <div className="text-center text-sm p-2">
                  {data.recommendData.TITLE}
                </div>
              </Link>
            ) : (
              <Link
                to={`${firstRecommend?.GUNAME}/${
                  new Date().getTime() + Math.ceil(Math.random() * 100)
                }`}
                state={{
                  codename: firstRecommend?.CODENAME,
                  guname: firstRecommend?.GUNAME,
                  img: firstRecommend?.MAIN_IMG,
                  title: firstRecommend?.TITLE,
                }}
                data-codename={firstRecommend?.CODENAME}
                className="w-[100%] h-[100%] flex flex-col items-center"
              >
                <img
                  src={firstRecommend?.MAIN_IMG}
                  className="w-[90%] h-[60%] object-cover"
                />
                <div className="text-center text-sm p-2">
                  {firstRecommend?.TITLE}
                </div>
              </Link>
            )}
          </div>
        ) : (
          <div
            onClick={() => setPopUp(true)}
            className="hover:cursor-pointer hover:scale-110 bg-neutral-500 p-4 rounded-full"
          >
            <BsChatRightDotsFill color="white" size={20} />
          </div>
        )}
      </div>
    </div>
  );
}
