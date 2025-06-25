import ImageCraousel from "@/components/home/ImageCraousel";
import { details } from "@/mocks/home";

function Home() {
  console.log("home page render");
  return (
    <div className="w-[100%] ">
      <div className="img-carousel w-[100%]">
        <ImageCraousel />
      </div>
      <div className="details w-[100%] flex justify-evenly mt-6">
        {details.map((item, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-blue-600">{item.heading}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
