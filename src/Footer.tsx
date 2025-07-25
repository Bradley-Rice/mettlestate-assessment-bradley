import { useState } from "react";
import Modal from "./Modal";

export const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <footer className="w-[100vw] bottom-0 bg-white p-1">
        <div className="w-[100%] flex">
          <div className="w-3/12">
            <img
              src="/assets/images/mettlestate-footer-logo.webp"
              alt=""
              className="w-25 rounded-[15px] p-1.5"
            />
          </div>
          <div className="w-6/12 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="h-[50px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Register!
            </button>
          </div>
          <div className="w-3/12 flex justify-center">
            <ul className="flex justify-center items-center">
              <div className="p-2.5">
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitch"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="absolute w-[400px] bg-white rounded-[6px] top-[50%] left-[50%] translate-[-50%]">
          <div className="p-3">
            <div>
              <h1 className="text-center mb-2.5">REGISTRATION.</h1>
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name.
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Full Name."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gamer Tag.
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Gamer Tag."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Favorite Game.
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="favGame"
                  type="text"
                  placeholder="Counter Strike"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={(onclose = () => setOpen(false))}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register.
                </button>
              </div>
            </form>
          </div>
          <button
            onClick={(onclose = () => setOpen(false))}
            className="absolute top-2 right-2 p-1 rounded-lg
                    text-gray-400 bg-white hover:bg-gray-50 
                    hover:text-gray-600"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Footer;
