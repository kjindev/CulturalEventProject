import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  const [isOnList, setIsOnList] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/list`
      );
      const result = await response.json();
      for (let i = 0; i < result.length; i++) {
        if (result[i].title === state.title) {
          setIsOnList(true);
        }
      }
    };
    getData();
  }, []);

  const updateData = () => {
    setIsOnList(true);
    fetch(
      `https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: state.title,
        }),
      }
    );
  };

  const deleteData = () => {
    setIsOnList(false);
    fetch(
      `https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/list`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: state.title,
        }),
      }
    );
  };

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-neutral-100">
      <div className="w-[90%] h-[90%] md:w-[50%] md:h-[90%] bg-white rounded-2xl p-5">
        <div className="text-center my-2">
          <span className="font-bold">[{state.codename}] </span>
          {state.title}
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[50vh] object-cover rounded-xl drop-shadow-md m-5"
            src={state.img}
          />
          <div className="text-sm my-2">
            {state.place && <div>장소 | {state.place}</div>}
            {state.date && <div>기간 | {state.date}</div>}
          </div>
          {!isOnList ? (
            <div
              onClick={updateData}
              className="bg-gray-200 m-3 px-3 py-1 rounded-xl hover:cursor-pointer"
            >
              관심 목록에 추가하기
            </div>
          ) : (
            <div
              onClick={deleteData}
              className="bg-orange-200 m-3 px-3 py-1 rounded-xl hover:cursor-pointer"
            >
              관심 목록에 추가됨
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
