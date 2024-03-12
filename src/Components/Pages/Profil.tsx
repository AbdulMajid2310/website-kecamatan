import { profil } from "../../Assets/Images";

const data = {
  judul: " Profil",
  paragraf: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem quos perferendis autem et architecto quis ducimus dolores dignissimos commodi!",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt rem quos perferendis autem et architecto quis ducimus dolores dignissimos commodi!",
    },
  ],
  image: profil,

  visi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  misi: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ],
};

const Profil = () => {
  return (
    <div
      className="w-full  
    bg-white  py-[100px] sm:py-[100px] font-andika"
    >
      <div className="bg-[#A07A53] sm:mt-[-20px] mt-[-40px] w-full">
        <p className="text-[14px] text-left sm:text-[20px] sm:px-20 px-7 text-white py-3">
          Beranda &gt; Profil Sekolah
        </p>
      </div>

      <div className="p-7 sm:p-20">
        <h3 className="text-[14px] sm:text-[36px] text-left  font-bold mb-2">
          {data.judul || "Tidak Ada Judul yang Tersedia"}
        </h3>
        <div className="flex flex-col-reverse sm:flex-row mt-5 sm:w-full sm:mt-10">
          <div>
            {data.paragraf.map((teks, index) => (
              <p
                key={index}
                className="sm:text-[18px]   sm:indent-10 text-[17px] mt-5   leading-[24px] sm:leading-[30px] text-justify sm:w-[700px]"
              >
                {teks.text}
              </p>
            ))}
          </div>
          <div className=" pl-[100px] w-[400px] ">
            <div className=" ">
              <img
                className=" h-[200px] rounded-lg  sm:w-[300px] object-cover w-[150px] sm:h-[350px]"
                src={data.image || " "}
                alt="Profile"
              />
            </div>
            <div className=" mt-[20px] text-center">
              <p className="text-[20px] font-bold  rounded-md">
                Muhammad Lutfi S.pd.I
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISI */}
      <div className="sm:mt-5 font-andika sm:pl-20 p-10">
        <div className="flex">
          {/* <img
            src={}
            alt="Plane"
            className="sm:w-[40.026px] w-[30px] h-[30px]  sm:h-[40.026px]"
          /> */}
          <p className="pl-2 text-[20px] sm:text-[24px] font-bold">VISI</p>
        </div>
        <ul className="list-disc sm:ml-[70px] sm:w-[900px] font-w-400 sm:leading-[40px] leading-[25px]  sm:w-100 text-[17px] text-justify sm:text-[20px] ">
          <p>" {data.visi} "</p>
        </ul>
      </div>

      <div className=" sm:pl-20 pl-8">
        <div className="flex">
          {/* <img
            src={Plane}
            alt="Plane"
            className="sm:w-[40.026px] sm:h-[40.026px] w-[30px] h-[30px]"
          /> */}
          <p className="pl-2 text-[20px] sm:text-[24px] font-bold">MISI</p>
        </div>
        <ul className="list-disc mx-9 font-w-400 sm:leading-[40px] leading-[24px] sm:w-100 text-[17px] text-justify sm:text-left sm:text-[20px] ">
          {data.misi.map((statement, index) => (
            <li key={index}>{statement.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profil;
