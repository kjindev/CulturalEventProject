import React, { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";

interface APIType {
  title: string;
}

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [list, setList] = useState<APIType[]>([]);

  const getData = async () => {
    const response = await fetch(
      `https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/list`
    );
    const result = await response.json();
    setList(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    await fetch(
      `https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/list`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: target.dataset.name,
        }),
      }
    );
    await getData();
  };

  return (
    <div className="z-[2]">
      <div className="fixed right-0 top-0">
        <div>
          {menuVisible ? (
            <div className="p-3 hover:cursor-pointer">
              <BsList size={30} onClick={() => setMenuVisible(false)} />
            </div>
          ) : (
            <div className="w-[100vw] flex">
              <div
                onClick={() => setMenuVisible(true)}
                className="w-[30%] md:w-[60%] h-[100vh]"
              ></div>
              <div className="menu-moving bg-neutral-200 w-[70%] md:w-[40%] h-[100vh] flex flex-col">
                <div className="self-end p-3 hover:cursor-pointer">
                  <BsX size={30} onClick={() => setMenuVisible(true)} />
                </div>
                <div className="pt-10">
                  <div className="text-center text-lg mb-3">관심 목록</div>
                  {list.length === 0 ? (
                    <div className="text-center">관심목록을 추가해보세요</div>
                  ) : (
                    list?.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white p-2 m-2 rounded-md"
                      >
                        <div className="w-[85%]">{item?.title}</div>
                        <div
                          className="w-[15%] text-xs text-end text-gray-500 p-1 ml-2 hover:cursor-pointer"
                          onClick={deleteData}
                          data-name={item?.title}
                        >
                          삭제
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
