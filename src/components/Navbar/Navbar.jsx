import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { LuFileDown } from "react-icons/lu";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open,setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          <div className="text-2xl flex items-center gap-2 font-extrabold uppercase ">
            <p className="text-gray-300">ENGR.</p>
            <p className="text-secondary ">TIAN</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-200">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-50 hover:bg-primary rounded-full p-2 hover:text-white duration-200 ">
              <CiSearch />
            </button>
            <button className="text-gray-50 hover:bg-primary rounded-full p-2 hover:text-white duration-200">
              <LuFileDown />
            </button>
            <button className=" hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block ">
              Login
            </button>
          </div>
          <div className="md:hidden onclick" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl "/>
          </div>

         
        </div>
      </nav>
      <div className="md:hidden, sm:block">
        <ResponsiveMenu  open={open} />
      </div>
      
    </>
  );
};

export default Navbar;
