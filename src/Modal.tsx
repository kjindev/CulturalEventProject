import { useEffect, useRef, useState } from "react";
import { BsXCircle, BsChatRightDotsFill } from "react-icons/bs";
import { useSelector } from "react-redux";

interface dataType {
  CODENAME: string;
  GUNAME: string;
  MAIN_IMG: string;
  TITLE: string;
}

export default function Modal({
  musicalData,
  movieData,
  classicData,
  educationData,
  concertData,
}: any) {
  const modalRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLInputElement>(null);
  const fadeinRef = useRef<HTMLInputElement>(null);
  const [recommend, setRecommend] = useState<dataType>();
  const [modalVisible, setModalVisible] = useState(false);
  const count = useSelector((state: any) => {
    return state.counter;
  });

  useEffect(() => {
    if (recommend === undefined) {
      if (count.musicalCnt > 3) {
        setModalVisible(true);
        setRecommend(
          musicalData[Math.ceil(Math.random() * musicalData.length)]
        );
      } else if (count.movieCnt > 3) {
        setModalVisible(true);
        setRecommend(movieData[Math.ceil(Math.random() * movieData.length)]);
      } else if (count.classicCnt > 3) {
        setModalVisible(true);
        setRecommend(
          classicData[Math.ceil(Math.random() * classicData.length)]
        );
      } else if (count.educationCnt > 3) {
        setModalVisible(true);
        setRecommend(
          educationData[Math.ceil(Math.random() * educationData.length)]
        );
      } else if (count.concertCnt > 3) {
        setModalVisible(true);
        setRecommend(
          concertData[Math.ceil(Math.random() * concertData.length)]
        );
      }
    }
  }, [count]);

  useEffect(() => {
    if (modalVisible) {
      fadeinRef.current?.classList.remove("hidden");
      fadeinRef.current?.classList.add("fadein-effect");
    }
  }, [modalVisible]);

  const XButtonClick = () => {
    modalRef.current?.classList.add("hidden");
    iconRef.current?.classList.remove("hidden");
  };

  const iconClick = () => {
    modalRef.current?.classList.remove("hidden");
    iconRef.current?.classList.add("hidden");
  };

  return (
    <div className="z-[2]">
      <div ref={fadeinRef} className="hidden">
        <div className="fixed bottom-0 right-0 drop-shadow-lg m-3">
          <div
            ref={modalRef}
            className="flex flex-col items-center w-[60vw] md:w-[30vw] h-[60vh] bg-white rounded-lg"
          >
            <div className="flex items-center">
              <div>[추천] 이런 문화행사는 어때요?</div>
              <div onClick={XButtonClick} className="hover:cursor-pointer">
                <BsXCircle />
              </div>
            </div>
            {recommend && (
              <div>
                <img
                  src={recommend.MAIN_IMG}
                  className="w-[100%] h-[50%] object-cover"
                />
                <div className="h-[30%]">{recommend.TITLE}</div>
              </div>
            )}
          </div>
          <div
            ref={iconRef}
            onClick={iconClick}
            className="hidden hover:cursor-pointer hover:scale-110 bg-neutral-500 p-4 rounded-full"
          >
            <BsChatRightDotsFill color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
