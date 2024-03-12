import React, { useEffect, useState } from "react";
import Hero from "../Beranda/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import useSearch from "../../Hooks/useSearch";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    judul: " Jum'at berbagi",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 ",
    judul: "Bantuan sosial program Pemerintah",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 ",
    judul: " Selamat datang",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    judul: " Jum'at berbagi 2",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 ",
    judul: "Bantuan sosial program Pemerintah 2",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80 ",
    judul: " Selamat datang 3",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus.",
  },
];

const Berita: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    searchTerm,
    setSearchTerm,
    filteredData,
    loading,
    handleSearch,
    isDataAvailable,
  } = useSearch(data);

  const pageSize = 4;

  const totalPages = Math.ceil(data.length / pageSize);

  const visibleData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
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
    }, 4000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-full">
      <Hero />

      <div className="lg:w-[1035px]  lg:shadow-lg">
        {/* Berita Popular */}
        <div className=" mt-[-120px] lg:pl-[30px]  lg:mt-[-50px] shadow-lg">
          <div className="text-left lg:text-[25px] p-[6px]">
            <p>Berita Popular</p>
          </div>
          <div className="flex shadow-lg lg:pl-[30px] lg:rounded-sm py-[20px]">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % data.length;
              const item = data[index];
              return (
                <div
                  key={offset}
                  className="object-contain active:text-white active:bg-blue-gray-500 bg-blue-gray-50  blur-50 shadow-md rounded-md mx-2 h-[100px] lg:h-[300px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[110px] lg:w-[300px] lg:h-[200px] h-[60px] object-cover"
                  />
                  <p className="text-[8px] lg:text-[18px] h-[20px]   p-2 w-[100px] lg:w-[300px]">
                    {item.judul}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex text-center">
            <div className="absolute mt-[-122px] lg:mt-[-220px]">
              <button
                onClick={shiftPrev}
                className="shadow-md lg:shadow-none lg:text-[40px]  text-white hover:text-black hover:bg-[#e4e4f0] lg:hover:bg-none text-[30px]  active:bg-[#a0a0a8] contrast-10 py-[30px] lg:py-[10px] lg:rounded-lg lg:px-[10px] rounded-lg pl-[20px] lg:pl-[0px] ml-[-10px] lg:ml-0 "
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <div className="absolute ml-[360px] lg:ml-[970px] mt-[-122px] lg:mt-[-220px]">
              <button
                onClick={shiftNext}
                className="shadow-md hover:bg-[#e4e4f0] text-white hover:text-black text-[30px] active:bg-[#a0a0a8] contrast-10 py-[30px] rounded-lg pr-[20px] mr-[-10px]"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>

        {/* Berita Utama */}
        <div className="px-[10px] lg:px-[30px] py-[20px]">
          <p className="text-left">Berita Utama</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
            {data.map((item, index) => (
              <div key={index} className="shadow-lg p-[5px]">
                <div className=" w-[170px] lg:w-[230px] h-[150px] object-contain ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full mb-3 brightness-100  h-full object-cover"
                  />
                </div>
                <div
                  className="absolute mt-[-50px] w-[170px] lg:w-[230px] lg:h-[53px] rounded-md bg-white bg-opacity-50  text-[12px]
                 "
                >
                  <p>{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Data */}
        <div className="lg:mt-[20px]">
          <div className="relative mt-[20px] flex-grow lg:mr-4 mx-[20px] lg:ml-[600px] lg:w-[400px] ">
            <input
              type="text"
              placeholder="Pencaharian..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-2 px-4 border-2 border-black rounded-xl bg-blue-gray-50  focus:outline-none focus:ring focus:border-blue-500 w-full "
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-[10px] px-4 rounded-md hover:bg-blue-600 active:bg-blue-800 focus:outline-none "
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          {loading && (
            <div className="flex relative z-40 w-[900px] items-center justify-center h-48">
              <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
              <span className="ml-2">Loading...</span>
            </div>
          )}
        </div>

        {/* Berita Lainnya */}
        {!loading && isDataAvailable && (
          <div className="mt-[10px]  mx-[10px] ">
            <p className="text-left lg:pl-[20px] lg:text-[25px]">
              Berita Lainnya
            </p>
            <div className="grid lg:grid-cols-2 ">
              {visibleData.map((item, index) => (
                <div
                  key={index}
                  className="flex mb-[10px] shadow-lg pl-[10px] lg:pl-[20px] rounded-md py-[10px] hover:bg-blue-gray-50 active:bg-blue-gray-100"
                >
                  <div className=" w-[200px] lg:w-[300px] h-[70px] lg:h-[150px]">
                    <img
                      src={item.image}
                      alt="index"
                      className=" w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div className="text-left pl-[10px]">
                    <p className="text-12 font-semibold h-[40px] leading-4">
                      {item.judul}
                    </p>
                    <p className="text-[12px]">{item.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {!loading && !isDataAvailable && (
          <div className="text-center lg:mt-[50px] lg:w-[800px] absolute">
            Data Tidak Tersedia
          </div>
        )}
        <div className="flex justify-center mt-4 lg:mt-[50px] ">
          {Array.from({ length: 4 }).map((_, index) => {
            const page = currentPage - 2 + index;
            const isPageInRange = page > 0 && page <= totalPages;
            return (
              <div key={index} className="flex-1 mx-2 relative">
                {isPageInRange && (
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`w-full h-full px-4 py-2 rounded-md ${
                      currentPage === page
                        ? "bg-blue-gray-500 text-white"
                        : "bg-blue-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Berita;
