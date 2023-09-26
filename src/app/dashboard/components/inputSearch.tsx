import React, { forwardRef } from "react";

// Defina as props do componente
interface SearchInputProps {
  // Adicione as props necessárias aqui
}

// eslint-disable-next-line react/display-name
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    return (
      <input
        placeholder="Pesquisar"
        ref={ref}
        className="border rounded-md outline-none p-1 h-9"
        type="search"
      />
    );
  }
);

export default SearchInput;
