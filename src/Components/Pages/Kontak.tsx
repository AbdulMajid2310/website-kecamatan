import { logo } from "../../Assets/Images";
import Chat from "../Kontak/Chat";
import Contact from "../Kontak/Contact";

const data = {
  judul: "Kontak",
  alamat: "Dsn. Cikepek, Ds. Laanjaya Kec. Pedes Kab.Karawang Jawa barat",
  maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6268.74468032315!2d107.29851207199927!3d-6.299199237137988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69773d99398ca9%3A0x16c0d0210c9693b!2sBagian%20Kesra%20Setda%20Kabupaten%20Karawang!5e1!3m2!1sid!2sid!4v1710146518021!5m2!1sid!2sid",
};
const Kontak = () => {
  return (
    <div className="w-full bg-white font-andika  pt-[80px] sm:pt-[100px] flex flex-col">
      <div className="bg-[#8C6946] w-full p-3  mt-[-24px]">
        <p className="text-[ 16px] pl-5 text-left sm:pl-[70px] text-white">
          Beranda &gt; Kontak
        </p>
      </div>

      {/* Dashboard */}

      <div className="flex mt-[20px]">
        <div className=" font-andika pl-10 w-[200px] lg:w-[600px]">
          <img
            src={logo}
            alt="kontak"
            className="sm:p-10 sm:w-[443.797px] sm:h-[251px] w-[200px] h-[100px] object-contain"
          />
        </div>
        <div className="text-left">
          <p className="sm:pt-8 text-[18px]  sm:text-[36px] ">Alamat</p>
          <div className=" text-[14px] sm:text-[24px] sm:w-[450px] w-[200px]   ">
            <p>{data?.alamat}</p>
          </div>
        </div>
      </div>

      {/* Maps */}

      <div className="lg:flex   mt-5 sm:flex-row px-10 sm:px-20  my-5 sm:my-10 ">
        <div className=" sm:w-[718px]  h-[200px] sm:h-[500px]  ">
          <a href={data?.maps}>
            <iframe
              title="Google Map"
              src={data?.maps}
              width="100%"
              height={400}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
        <div className="flex flex-col lg:pt-0 pt-[200px] lg:mt-0  mb-3">
          <div className="w-170 sm:w-[317px]  sm:h-[80px]   gap-8 sm:px-5 mt-2 my-1 sm:mx-1">
            <Contact />
          </div>
        </div>
      </div>

      <Chat />
    </div>
  );
};

export default Kontak;
