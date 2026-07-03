"use client";

import { useState } from "react";

interface Props {
  value: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>

      {count === 0 && (
        <div className="flex">
          <span className="text-lg text-red-800 mt-2 font-bold">
            Se han eliminado todos los productos
          </span>
        </div>
      )}
    </>
  );
};
