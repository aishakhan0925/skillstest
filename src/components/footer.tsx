import logo from "../assets/images/flogo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#3c4b6a] p-3">
        <div className="container grid space-y-5 md:space-y-0 justify-center items-center  md:grid-cols-2 lg:grid-cols-2 mx-auto p-2">
         <div>
         <img src={logo} alt="Logo here" />
         </div>
          <div className="md:justify-end md:flex md:items-center">
            <span className="text-[#546f94] uppercase font-bold italic leading-5 tracking-wide text-lg">
              COPYRIGHT 2016. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
