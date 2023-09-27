import React from "react";

import UserProfile from "./user";
import SearchInput from "./inputSearch";

const HeaderDash = () => {
  return (
    <>
      <header className="bg-white fixed w-[calc(100%-240px)] h-16 px-9 py-3  border flex items-center justify-between border-b shadow-xl ">
        <SearchInput />
        <UserProfile />
        {/* imagem do usuário logado */}
      </header>
    </>
  );
};

export default HeaderDash;
