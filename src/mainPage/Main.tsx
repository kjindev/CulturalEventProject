import { useRef } from "react";

export default function Main() {
  return (
    <div className="bg-neutral-100 text-center w-[100%] h-[100vh] flex items-center justify-center">
      <div className="p-7 flex flex-col">
        <div className="title-font text-4xl md:text-6xl lg:text-7xl">
          <div>
            Art is{" "}
            <span className="text-stroke text-neutral-100 italic">
              anything
            </span>
          </div>
          <div>you can get away with.</div>
        </div>
        <hr className="mx-[45%] my-12" />
        <div className="px-[10%] md:px-[15%] lg:px-[20%] text-xs lg:text-sm text-center">
          우리를 일상에서 벗어나게 해주는 모든 것은 예술이 됩니다. 누군가에게는
          추억, 누군가에게는 쉼터, 누군가에게는 즐거움이 되어주는 우리의 예술과
          문화. 그 예술과 문화의 공간을 공유합니다.
        </div>
      </div>
    </div>
  );
}
