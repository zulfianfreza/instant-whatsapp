"use client";

import { ICountryCode } from "@/types";
import { Send } from "iconsax-react";
import Link from "next/link";
import React from "react";
import MessageInput from "./message-input";
import PhoneNumberInput from "./phone-number-input";
import { Button } from "./ui/button";

interface PhoneNumberInputProps {
  countryCodes: ICountryCode[];
}

export default function Form({ countryCodes }: PhoneNumberInputProps) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <div className="flex flex-col w-full mt-16 max-w-md">
      <PhoneNumberInput
        countryCodes={countryCodes}
        value={phoneNumber}
        setValue={setPhoneNumber}
      />

      <MessageInput value={message} setValue={setMessage} />

      <Button
        asChild
        className=" bg-primary gap-1 mt-4 rounded-lg h-12 shadow-[0px_12px_20px_-10px_rgba(12,193,68,0.6)] dark:bg-primary hover:bg-primary/90 group dark:hover:bg-primary/90"
      >
        <Link
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
        >
          <span className=" text-white">Send</span>
          <Send
            className=" h-5 text-white group-hover:animate-send"
            variant="Bulk"
          />
        </Link>
      </Button>
    </div>
  );
}
