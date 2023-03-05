import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-neutral-100">
      <div className="w-[90%] h-[90%] md:w-[50%] md:h-[90%] bg-white rounded-2xl p-5">
        <div className="text-center my-2">
          <span className="font-bold">[{state.codename}] </span>
          {state.title}
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src={state.img}
          />
          <div className="text-sm my-2">
            <div>장소 | {state.place}</div>
            <div>기간 | {state.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
