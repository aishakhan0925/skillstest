import { NumberTitles } from "./number-titles";
import bgImage from "../assets/images/history-bg.png";
import Carousel from "./image-slider";

const HistorySection = () => {
  return (
    <div
    id="history-section"
      className="bg-cover h-auto lg:h-[100vh] bg-no-repeat pt-20 flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto  px-5 sm:px-0">
        <NumberTitles
          number={"01"}
          title={"History"}
          titleMarginLeft="left-24"
        />
        <p className="pl-20 font-thin leading-8 tracking-wide text-[#3c4b6a] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nam
          tenetur quos unde ducimus esse harum, perspiciatis quas fuga, corporis
          odio fugiat accusantium commodi suscipit sapiente iure nostrum
          architecto voluptatum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non sequi vero, aspernatur tempore eius nulla beatae
          quia earum quae ut incidunt asperiores iste ex! Nostrum eligendi
          possimus ut magnam quasi.
        </p>
      </div>
      <div className="w-full bg-[#3c4b6a] opacity-90  items-center py-10">
        <Carousel />
      </div>
    </div>
  );
};
export default HistorySection;
