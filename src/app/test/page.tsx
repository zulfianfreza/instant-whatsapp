import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, ShoppingCart } from "iconsax-react";
import React from "react";

export default function page() {
  return (
    <div className=" w-full bg-slate-100 min-h-screen">
      <div className=" w-full sticky top-0 bg-slate-100">
        <div className=" max-w-[32rem] w-full mx-auto py-4 px-5 flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <ArrowLeft />
            <p>Detail</p>
          </div>

          <ShoppingCart />
        </div>
      </div>

      <div className=" w-full max-w-[32rem] mx-auto pb-14 px-5">
        <div className=" w-full aspect-square border rounded-xl bg-white"></div>
        <div className=" mt-4">
          <h1 className=" text-2xl text-neutral-900 font-semibold">
            Apple Watch
          </h1>
          <p className=" text-primary text-lg">Rp200.000</p>
        </div>
        <div className=" mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            ipsam, libero aut assumenda, amet explicabo ea eligendi saepe sed
            dolore deleniti, atque debitis hic vel.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            ipsam, libero aut assumenda, amet explicabo ea eligendi saepe sed
            dolore deleniti, atque debitis hic vel.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            ipsam, libero aut assumenda, amet explicabo ea eligendi saepe sed
            dolore deleniti, atque debitis hic vel.
          </p>
        </div>
        <div className=" mt-4">
          <p className=" text-sm text-neutral-900">101 Stock</p>
        </div>
      </div>

      <div className=" fixed bottom-0 pb-2 w-full bg-slate-100 px-5">
        <div className="max-w-[32rem] w-full mx-auto flex gap-2">
          <Button className=" w-full bg-white text-primary">
            <ShoppingCart />
            <p>Add to Cart</p>
          </Button>
          <Button className=" w-full bg-primary text-white">
            <ShoppingBag />
            <p>Buy Now</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
