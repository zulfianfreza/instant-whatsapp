"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICountryCode } from "@/types";

interface PhoneNumberInputProps {
  countryCodes: ICountryCode[];
  value: string;
  setValue: (phoneNumber: string) => void;
}

export default function PhoneNumberInput({
  countryCodes,
  value,
  setValue,
}: PhoneNumberInputProps) {
  const [open, setOpen] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState<ICountryCode | null>({
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  });
  const [number, setNumber] = React.useState("");
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  React.useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [countryCode]);

  return (
    <div className=" gap-y-2 flex flex-col">
      <label
        htmlFor=""
        className=" text-neutral-900 text-sm font-medium dark:text-neutral-100"
      >
        Phone Number *
      </label>
      <div className=" w-full h-12 relative">
        <input
          type="text"
          className=" w-full h-12 focus:outline-none focus:ring-primary dark:focus:ring-primary overflow-hidden ring-2 rounded-lg ring-neutral-200 text-sm text-neutral-900 dark:ring-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
          value={number}
          onChange={(e) => {
            const result = e.target.value.replace(/\D/g, "");

            setNumber(result.toString());
            setValue(countryCode?.dial_code + result);
          }}
          style={{ paddingLeft: `${buttonWidth}px` }}
        />
        <div className=" absolute left-0 top-0">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                ref={buttonRef}
                className=" h-12 border-none transition-none bg-transparent hover:bg-transparent rounded-none dark:bg-transparent dark:hover:bg-transparent font-normal"
              >
                {countryCode
                  ? countryCodes.find(
                      (country) => country.name === countryCode?.name
                    )?.dial_code
                  : "Select country..."}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search country..." className="h-9" />
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  <div className=" h-60 overflow-y-scroll">
                    {countryCodes.map((country, index) => (
                      <CommandItem
                        key={index}
                        onSelect={() => {
                          setCountryCode(country);
                          setOpen(false);
                          setValue(country.dial_code + number);
                        }}
                        className={cn({
                          "bg-primary/20": country == countryCode,
                        })}
                      >
                        <div className=" w-full flex justify-between">
                          <span>{country.name}</span>
                          <span>{country.dial_code}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </div>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
