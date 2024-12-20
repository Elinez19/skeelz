import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import Sidebar from "./ui/SideBar1"; 

const MenuTwo = () => {
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (id: number) => {
    setSubmenuOpen(submenuOpen === id ? null : id);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative flex items-center">
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
        <FaBars className="h-6 w-6 text-emerald-500" />
      </div>

      {/* Right Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={toggleMenu} className="md:hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <span className="text-lg font-bold">Logo</span>
        </div>
        <ul className="mt-4">
          {mobile_menu_data.map((item) => (
            <li key={item.id} className="relative">
              <div
                className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => item.hasDropdown && handleMenuToggle(item.id)}
              >
                <Link href={item.link} className="text-gray-900">{item.title}</Link>
                {item.hasDropdown && (
                  <div className="ml-2">
                    {submenuOpen === item.id ? (
                      <FaChevronUp className="text-gray-700" />
                    ) : (
                      <FaChevronDown className="text-gray-700" />
                    )}
                  </div>
                )}
              </div>
              {item.hasDropdown && submenuOpen === item.id && (
                <motion.ul
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 shadow-inner ml-4 rounded"
                >
                  {item.submenus?.map((submenu, index) => (
                    <li key={index} className="pl-6 py-2 hover:bg-gray-200">
                      <Link href={submenu.link} className="text-gray-700">{submenu.title}</Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
};

export default MenuTwo;
