"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/app/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  count: number;
  method: string;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  console.log(data);
  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
          onClick={() => dispatch(addOne())}
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
