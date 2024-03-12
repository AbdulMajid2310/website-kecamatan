import React, { useState } from "react";

const Chat = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className=" lg:mt-[50px] mt-[50px]    font-andika">
      <div className="lg:mt-500 mt-0 px-5 lg:pl-10 text-left">
        <p className="sm:text-[32px] text-lg font-bold ">
          Anda memiliki pertanyaan ?
        </p>
        <p className="sm:text-[20px] text-[#828282] mt-3">
          kirim pesan, dan kami akan menjawab pertanyaan anda
        </p>
      </div>
      <div className=" p-5 sm:p-20 flex justify-center text-left h-7xl">
        <div className="bg-[#e9e6e6] rounded-xl lg:p-8 p-4 shadow-xl w-full lg:w-[600px]">
          <h2 className="text-2xl text-center font-bold mb-6">Hubungi Kami</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullname" // Match this with the "id" of the associated input
              >
                Nama Lengkap
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname" // Match this with the "for" of the associated label
                type="text"
                placeholder="Masukkan Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fromemail"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fromemail"
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                No. Handphone
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="Masukkan No. Handphone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                className="appearance-none border rounded w-full h-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Masukkan Pesan Anda"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center bg-green-400 hover:bg-green-600 hover:bg-slate-500 active:bg-green-800 active:text-white rounded-xl">
              <button type="submit" className="p-3 font-bold">
                {submitting ? "Sedang mengirim..." : "Kirim Pesan"}
              </button>
            </div>
            {success && (
              <div className="text-green-600 text-center mt-4">
                Pesan telah terkirim dengan sukses!
              </div>
            )}
            {error && (
              <div className="text-red-600 text-center mt-4">{error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
