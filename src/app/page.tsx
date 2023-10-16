import Navbar from "@/components/navbar";
import React from "react";
import { promises as fs } from "fs";
import { ICountryCode } from "@/types";
import PhoneNumberInput from "@/components/phone-number-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send } from "iconsax-react";
import MessageInput from "@/components/message-input";
import Form from "@/components/form";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/CountryCodes.json",
    "utf-8"
  );
  const data = JSON.parse(file) as ICountryCode[];

  return (
    <div className=" flex flex-col h-screen items-center justify-center w-full bg-white dark:bg-neutral-950">
      <Navbar />

      <div className=" flex-1 max-w-md flex flex-col items-center justify-center w-full ">
        <div className=" text-center">
          <h1 className=" text-5xl font-medium text-neutral-900 dark:text-neutral-100">
            Instant <span className=" text-primary">WhatsApp </span>
          </h1>
          <p className=" text-neutral-500 text-sm mt-2 dark:text-neutral-400">
            Easy way to send WhatsApp without saving the number first
          </p>
        </div>

        <Form countryCodes={data} />
      </div>
      <div className="flex justify-center my-4">
        <p className=" text-sm text-neutral-500 dark:text-neutral-400">
          Created by{" "}
          <Link
            className=" text-neutral-900 dark:text-neutral-100 hover:underline"
            href="https://julianreza.com"
            target="_blank"
          >
            julianreza
          </Link>
        </p>
      </div>
    </div>
  );
}
