import Culture from "./Culture";
import Main from "./Main";

interface propsType {
  data: {
    CODENAME: string;
    GUNAME: string;
    MAIN_IMG: string;
    TITLE: string;
    DATE: string;
    PLACE: string;
  }[];
}

export default function Home({ data }: propsType) {
  return (
    <>
      <div>
        <Main />
      </div>
      <div>
        <Culture data={data} />
      </div>
    </>
  );
}
