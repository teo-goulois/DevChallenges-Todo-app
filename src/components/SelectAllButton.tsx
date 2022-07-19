import React from "react";
type Props = {
  selectAllTodos: () => void;
};
const SelectAllButton = ({ selectAllTodos }: Props) => {
  return (
    <button
      onClick={() => selectAllTodos()}
      className="bg-blue flex items-center px-4  py-2 rounded-[4px] text-white font-semibold text-xs float-right"
    >
      <p className="">select all</p>
    </button>
  );
};

export default SelectAllButton;
