import ImageCraousel from "@/components/home/ImageCraousel";


function Home() {
  console.log('home page render')
  return (
    <div className="w-[100%] ">
      <div className="img-carousel w-[100%]">
        <ImageCraousel />
      </div>
    </div>
  )
}

export default Home
