import { fb, ig, sms, telp, twitter } from "../../Assets/Images";

const data = [
  {
    kontaks: [
      {
        id: 1,
        icons: telp,
        text: "WhatsApp",
        url: "wa.me/085162677246",
      },
      {
        id: 1,
        icons: sms,
        text: "Email",
        url: "maiilto=Abdulma272@gmail.com",
      },
    ],
    sosmed: [
      {
        id: 1,
        icons: fb,
        text: "Faebook",
        url: "https://www.facebook.com",
      },
      {
        id: 1,
        icons: twitter,
        text: "Twitter",
        url: "https://www.twitter.com",
      },
      {
        id: 1,
        icons: ig,
        text: "Instagram",
        url: "https://www.instagram.com",
      },
    ],
  },
];
const Contact = () => {
  return (
    <div className="sm:pl-5  text-left mb-3 font-andika">
      {data?.map((contact, index) => (
        <div key={index}>
          <ul className="sm:mt-5 shadow-lg lg:w-[400px] lg:px-5 px-5 mb-5  mt-2">
            <h3 className="text-lg sm:text-[24px]">Kontak Kami</h3>
            {contact.kontaks.map((item, index) => (
              <div className="">
                <li key={index} className="pb-2 pl-5 mt-2 flex">
                  <img
                    src={item.icons}
                    alt="icons"
                    className="object-contain "
                  />
                  <a
                    href={item.url}
                    className="hover:text-blue-500 pl-2 text-[20px] sm:text-[24px]"
                  >
                    {item.text}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <div className="shadow-lg p-5 lg:w-[400px]">
            <h3 className="text-lg sm:text-[24px] text-black">SOSIAL MEDIA</h3>
            <ul className="sm:pl-2  mt-2">
              {contact.sosmed.map((item, index) => (
                <li className="pb-2 pl-5 flex" key={index}>
                  <img
                    src={item.icons}
                    alt="contact"
                    className="w-[32px] object-contain  h-[32px] mt-1"
                  />
                  <a
                    href={item.url}
                    className="hover:text-blue-500 pl-2 text-md sm:text-[24px]"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
