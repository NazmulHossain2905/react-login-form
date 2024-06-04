import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PricingPage = () => {
  return (
    <div className="mx-auto mb-40 max-w-screen-xl">
      <nav class="flex items-center justify-between px-1 py-2 font-inter">
        <div class="flex cursor-pointer items-center gap-4">
          <img class="size-[32px] object-contain" src="/logo.svg" alt="Logo" />
          <span class="hidden text-[18px] font-bold text-[#102A43] sm:block">
            Lightning Dashboard
          </span>
        </div>

        <ul class="hidden gap-10 md:flex">
          <li class="cursor-pointer text-[18px] font-medium text-secondary transition hover:text-primary">
            Product
          </li>
          <li class="cursor-pointer text-[18px] font-medium text-secondary transition hover:text-primary">
            Pricing
          </li>
          <li class="cursor-pointer text-[18px] font-medium text-secondary transition hover:text-primary">
            Learn
          </li>
        </ul>

        <div class="flex gap-5">
          <button class="text-[18px] font-medium text-secondary">Login</button>
          <button class="rounded-[40px] bg-gradient-to-r from-[#1992D4] from-0% via-[#1F85C2] via-[52.6%] to-[#247AB2] to-100% px-6 py-2 text-[18px] font-bold text-[#F0F4F8]">
            Sign Up
          </button>
        </div>
      </nav>

      <div class="mt-[3rem] text-center font-inter md:mt-[10rem]">
        <h1 class="text-[2rem] font-medium tracking-[-0.075rem] text-secondary md:text-[3.75rem]">
          Pick the price{" "}
          <span class="bg-gradient-to-r from-[#0B69A3] from-50% to-[#40C3F7] to-95% bg-clip-text text-transparent">
            thats right for you
          </span>
        </h1>
        <p class="mt-[1.5rem] text-lg text-[#486581]">
          Join millions of other customers on this platform
        </p>
      </div>

      <div class="m-2 mt-[80px] flex flex-wrap justify-center gap-8 font-inter">
        <div class="flex w-[20rem] flex-col gap-4 rounded-xl bg-white py-[1.5rem] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] transition hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)]">
          <div class="flex flex-col items-start gap-3 px-[1.5rem]">
            <span class="rounded-[1.5rem] bg-[#E3F8FF] px-[12px] py-[2px] text-[12px] font-semibold text-[#035388]">
              Lite
            </span>
            <div class="flex items-center gap-2">
              <h2 class="text-[30px] font-semibold text-secondary">$7</h2>
              <span class="text-[14px] text-[#829AB1]">/month</span>
            </div>

            <p class="text-[14px] text-[#486581]">
              Just using this for yourself? Lite is the way to go for the lites
              platform.
            </p>
          </div>

          <div class="px-[1.5rem]">
            <button class="w-full rounded-lg border border-primary bg-primary px-4 py-[10px] text-center font-semibold text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition hover:bg-transparent hover:text-primary">
              Select Lite
            </button>
          </div>

          <div class="my-1 h-[1px] w-full bg-[#F0F4F8]"></div>

          <ul class="flex flex-col gap-4 px-[1.5rem]">
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                One person team
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                Exports to files for easy client viewing
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                2TB of data for your account
              </span>
            </li>
          </ul>
        </div>
        <div class="flex w-[20rem] flex-col gap-4 rounded-xl bg-white py-[1.5rem] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] transition hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)]">
          <div class="flex flex-col items-start gap-3 px-[1.5rem]">
            <span class="rounded-[1.5rem] bg-[#FFE3EC] px-[12px] py-[2px] text-[12px] font-semibold text-[#620042]">
              Pro
            </span>
            <div class="flex items-center gap-2">
              <h2 class="text-[30px] font-semibold text-secondary">$19</h2>
              <span class="text-[14px] text-[#829AB1]">/month</span>
            </div>

            <p class="text-[14px] text-[#486581]">
              Just using this for yourself? Lite is the way to go for the lites
              platform.
            </p>
          </div>

          <div class="px-[1.5rem]">
            <button class="w-full rounded-lg border border-primary bg-primary px-4 py-[10px] text-center font-semibold text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition hover:bg-transparent hover:text-primary">
              Select Pro
            </button>
          </div>

          <div class="my-1 h-[1px] w-full bg-[#F0F4F8]"></div>

          <ul class="flex flex-col gap-4 px-[1.5rem]">
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                One person team
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                Exports to files for easy client viewing
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                2TB of data for your account
              </span>
            </li>
          </ul>
        </div>
        <div class="flex w-[20rem] flex-col gap-4 rounded-xl bg-white py-[1.5rem] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] transition hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)]">
          <div class="flex flex-col items-start gap-3 px-[1.5rem]">
            <span class="rounded-[1.5rem] bg-[#EFFCF6] px-[12px] py-[2px] text-[12px] font-semibold text-[#004440]">
              Team
            </span>
            <div class="flex items-center gap-2">
              <h2 class="text-[30px] font-semibold text-secondary">$31</h2>
              <span class="text-[14px] text-[#829AB1]">/month</span>
            </div>

            <p class="text-[14px] text-[#486581]">
              Just using this for yourself? Lite is the way to go for the lites
              platform.
            </p>
          </div>

          <div class="px-[1.5rem]">
            <button class="w-full rounded-lg border border-primary bg-primary px-4 py-[10px] text-center font-semibold text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition hover:bg-transparent hover:text-primary">
              Select Team
            </button>
          </div>

          <div class="my-1 h-[1px] w-full bg-[#F0F4F8]"></div>

          <ul class="flex flex-col gap-4 px-[1.5rem]">
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                One person team
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                Exports to files for easy client viewing
              </span>
            </li>
            <li class="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-lg text-[#9FB3C8]" />
              <span class="flex-1 text-[14px] text-[#486581]">
                2TB of data for your account
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
