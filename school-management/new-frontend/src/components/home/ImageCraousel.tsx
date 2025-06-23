import { images } from "@/mocks/home";
import { useState, useEffect } from "react";
import "./style.css";

function ImageCraousel() {
  const [activeImg, setActiveImg] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImg]);

  return (
    <div className="w-[100%] h-[450px] ">
      <div className="absolute w-[100%] h-[450px] z-0  ">
        {images.map((item, index) => (
          <div
            key={index}
            className={`w-[100%] h-[100%] duration-1000 transition-all ease-in-out absolute img-div ${
              activeImg === index
                ? "opacity-100 pointer-events-auto scale-100 "
                : "opacity-0 pointer-events-none scale-80"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%), url(${item})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        ))}
      </div>
      <div className="absolute z-2 left-1/2 w-ful transform -translate-x-1/2 -translate-y-1/2 text-center top-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-[60px] text-white font-bold w-max">
            Welcome to <span className="text-amber-300">HSS MUNAD</span>
          </h1>
          <p className="text-white text-shadow-white mt-2 w-max">
            Empowering minds, shaping futures since 1948
          </p>
          <button className="px-6 py-[10px] text-white font-semibold border-2 border-white text-lg mt-4 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg transform duration-300 hover:scale-98 transition-all hover:bg-gradient-to-r hover:from-white hover:to-blue-200 hover:text-amber-500 cursor-pointer hover:opacity-85">
            Explore Our Campus
          </button>
          <div className="btns flex gap-2 mt-8">
            {images.map((_, index) => (
              <button key={index} onClick={() => setActiveImg(index)} className={`h-[15px] cursor-pointer transform duration-1000 transition-[width,background-color,opacity] rounded-full ${activeImg === index ? "w-[25px] bg-amber-400" : "w-[15px] bg-white opacity-50"}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCraousel;
