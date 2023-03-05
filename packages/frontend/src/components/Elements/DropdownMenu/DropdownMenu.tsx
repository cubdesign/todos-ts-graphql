import React, { useState } from "react";

export type DropdownMenuProps = {
  clickTarget: React.ReactNode;
  menuItems: React.ReactNode[];
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  clickTarget,
  menuItems,
}) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <div className="relative">
      <button onClick={toggleMenu}>{clickTarget}</button>
      {isMenuActive ? (
        <>
          <button
            tabIndex={-1}
            className="z-10  fixed inset-0 cursor-default"
            onClick={toggleMenu}
          ></button>
          <div className="absolute right-0 z-20 bg-white shadow border border-gray-100 py-2 mt-2 rounded-lg w-48">
            <ul>
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  onClick={toggleMenu}
                  className="text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg px-4 py-2"
                >
                  {menuItem}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};
