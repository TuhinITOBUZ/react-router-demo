import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="bg-amber-200 pt-[1rem] pb-[1rem]">
        <div className="invisible flex flex-row gap-5 justify-center md:visible ">
          <Link
            className="font-bold cursor-pointer hover:text-amber-500 hover:scale-[1.1]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-bold cursor-pointer hover:text-amber-500 hover:scale-[1.1]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-bold cursor-pointer hover:text-amber-500 hover:scale-[1.1]"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-bold cursor-pointer hover:text-amber-500 hover:scale-[1.1]"
            to="/project"
          >
            Project
          </Link>
        </div>
        <div className="visible md:invisible relative">
          <i
            onClick={() => {
              openNav ? setOpenNav(false) : setOpenNav(true);
            }}
            className="fa-solid fa-bars text-[2rem] absolute top-[-1.75rem] pl-[1rem]"
          ></i>
          {openNav ? (
            <div className="absolute flex flex-col gap-5 w-[100%] h-[100vh] p-4 backdrop-blur-[8px]">
              <Link
                onClick={() => {
                  openNav ? setOpenNav(false) : setOpenNav(true);
                }}
                className="text-center"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  openNav ? setOpenNav(false) : setOpenNav(true);
                }}
                className="text-center"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  openNav ? setOpenNav(false) : setOpenNav(true);
                }}
                className="text-center"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                onClick={() => {
                  openNav ? setOpenNav(false) : setOpenNav(true);
                }}
                className="text-center"
                to="/project"
              >
                Project
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
