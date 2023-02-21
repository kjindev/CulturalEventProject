import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gradient-to-r from-sky-200 to-blue-200">
      <div className="w-[80%] h-[90%] bg-white rounded-2xl drop-shadow-xl p-7">
        <div className="text-4xl">{state.name}</div>
        <div>{state.address}</div>
        <div>{state.payname}</div>
        <div>{state.tel}</div>
      </div>
    </div>
  );
}
