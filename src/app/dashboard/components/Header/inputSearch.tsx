import React, { forwardRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

// eslint-disable-next-line react/display-name
const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="relative">
      <HiOutlineSearch
        fontSize={20}
        className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
      />
      <input
        placeholder="Pesquisar..."
        ref={ref}
        className="text-sm text-slate-400 focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        type="search"
      />
    </div>
  )
})

export default SearchInput
