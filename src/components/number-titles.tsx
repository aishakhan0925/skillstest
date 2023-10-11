import React from "react";

// Defining a TypeScript interface for the props
interface NumberTitleProps {
  number: string;
  title: string;
  titleMarginLeft:string;
}

export const NumberTitles: React.FC<NumberTitleProps> = ({ number, title, titleMarginLeft }) => {
  return (
    <div className="items-baseline relative flex">
      <h1 className="text-9xl font-bold text-[#546f94] ">{number}.</h1>

      <div className={`absolute ${titleMarginLeft} bottom-8`}>
        <h1 className="text-[#3c4b6a] font-semibold ">{title}</h1>
      </div>
    </div>
  );
};
