import React from "react";
// Icon
import { TrashIcon } from "../utilities/Icons";

type Props = {
    deleteAllCompletedTodo: () => void
}
const DeleteButton = ({ deleteAllCompletedTodo }: Props) => {
  return (
    <button onClick={() => deleteAllCompletedTodo()} className="bg-red flex items-center px-4  py-2 rounded-[4px] text-white font-semibold text-xs float-right">
      <TrashIcon fill="#FFFFFF" />
      <p className="ml-2">delete all</p>
    </button>
  );
};

export default DeleteButton;
