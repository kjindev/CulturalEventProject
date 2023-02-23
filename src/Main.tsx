import { useRef } from "react";

export default function Main() {
  const fadeinRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-neutral-100 text-center w-[100%] h-[100vh] flex items-center justify-center">
      <div className="p-7 flex flex-col">
        <div className="title-font text-4xl md:text-6xl lg:text-7xl">
          <div>
            Art is{" "}
            <span ref={textRef} className="text-stroke text-neutral-100 italic">
              anything
            </span>
          </div>
          <div>you can get away with.</div>
        </div>
        <hr className="mx-[45%] my-12" />
        <div
          ref={fadeinRef}
          className="px-[10%] md:px-[15%] lg:px-[20%] fadein-effect text-xs lg:text-sm text-center"
        >
          우리는 오늘도 일상을 살아냅니다. 반복되는 하루, 반복되는 고민,
          반복되는 지겨움 속에서 숨 돌릴 곳을 찾는 사람들. 이런 우리를 일상에서
          벗어나게 해주는 모든 것은 예술이 됩니다. 누군가에게는 추억,
          누군가에게는 쉼터, 누군가에게는 즐거움이 되어주는 우리의 예술과 문화.
          그 예술과 문화의 공간을 공유합니다.
        </div>
      </div>
    </div>
  );
}
