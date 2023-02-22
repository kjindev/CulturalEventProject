import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-neutral-100">
      <div className="w-[70%] h-[95%] md:w-[50%] md:h-[90%] bg-white">
        <div className="text-xl mr-1 font-bold">{state.title}</div>
      </div>
    </div>
  );
}
