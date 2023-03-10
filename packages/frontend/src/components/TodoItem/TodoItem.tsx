import { Todo } from "@/__generated__/graphql";
import React, { useState } from "react";
import { DropdownMenu } from "../Elements/DropdownMenu";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

export type TodoItemProps = {
  todoItem: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todoItem }) => {
  return (
    <article
      key={todoItem?.id}
      className={`flex justify-between  items-center bg-white rounded shadow-sm border-l-8 my-4 px-4 h-20 ${
        todoItem?.isCompleted ? "border-emerald-500" : "border-blue-600"
      }`}
    >
      <div className="flex items-center">
        <input
          checked={todoItem?.isCompleted}
          type="checkbox"
          className="w-4 h-4"
        />
        <div className="flex flex-col ml-4">
          <p
            className={`${
              todoItem?.isCompleted
                ? "text-emerald-500 line-through"
                : "text-slate-600"
            }`}
          >
            {todoItem?.title}
          </p>
          <small className="text-gray-400">
            {todoItem?.createdAt.toISOString().split("T")[0]}
          </small>
        </div>
      </div>
      <DropdownMenu
        clickTarget={
          <small className="text-gray-500 hover:bg-gray-100 rounded-full">
            •••
          </small>
        }
        menuItems={[
          <button
            key={1}
            className="flex justify-between w-full items-center text-gray-800 cursor-pointer"
          >
            <span>Edit</span>
            <AiOutlineEdit />
          </button>,
          <button
            key={2}
            className="flex justify-between w-full items-center text-red-400 cursor-pointer"
          >
            <span>Remove</span>
            <BiTrash />
          </button>,
        ]}
      />
    </article>
  );
};
