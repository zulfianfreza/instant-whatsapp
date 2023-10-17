"use client";

import { setRequestMeta } from "next/dist/server/request-meta";
import React from "react";

interface MessageInputProps {
  value: string;
  setValue: (message: string) => void;
}

export default function MessageInput({ value, setValue }: MessageInputProps) {
  return (
    <div className=" flex flex-col mt-4 gap-y-2">
      <label
        htmlFor=""
        className=" text-neutral-900 text-sm font-medium dark:text-neutral-100"
      >
        Message
      </label>
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" rounded-lg w-full ring-2 ring-neutral-200 focus:outline-none focus:ring-primary dark:focus:ring-primary text-sm p-4 py-2.5 dark:ring-neutral-800 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
        placeholder="Say something here! (optional)"
      ></textarea>
    </div>
  );
}
