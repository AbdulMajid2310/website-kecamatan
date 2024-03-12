import React, { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    judul: " Selamat datang",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 ",
    judul: " Selamat datang",
  },
  {
    id: 3,
    image:
      " https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    judul: " Selamat datang",
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to manually shift to the next data item
  const shiftNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };
  const shiftPrev = () => {
    const nextIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    // Automatically shift to the next data item every 3 seconds
    const interval = setInterval(() => {
      shiftNext();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="rounded-xl max-w-full pt-[65px] lg:h-[550px] h-[500px]">
      <div className="flex">
        {data.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={index} className={`w-full ${isActive ? "" : "hidden"}`}>
              <div className="absolute z-20 lg:w-[1300px] w-[400px]">
                <div className="lg:mt-[100px] mt-[50px] w-full text-white text-center">
                  <p className="lg:text-[30px] text-[20px] text-white">
                    {item.judul}
                  </p>
                  <p className="font-bold text-white text-[30px] lg:text-[40px]">
                    KARAWANG BARAT
                  </p>
                  <div className="items-center">
                    <p className="mx-[50px] lg:mx-[450px] lg:text-center text-justify text-[12px] lg:text-[16px] lg:w-[500px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus autem minus voluptate quasi necessitatibus
                    </p>
                  </div>
                  <div className="">
                    <button className="bg-green-500 hover:bg-green-600 active:bg-green-800 active:text-white rounded-md w-[100px] mx-[10px]">
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={item.image || ""}
                  alt={`image ${index + 1}`}
                  className="h-[300px] brightness-50 lg:h-[400px] w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
