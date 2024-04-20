"use client";

import Breakline from "@/components/atoms/contents/breakLine";
import useChat, { CHATTAB } from "@/hooks/useChat";
import clsxm from "@/lib/clsxm";

export default function ChatTabContent() {
  const { changeTab, activeTab } = useChat();
  return (
    <>
      <Breakline className="dark:text-d-xl-blue m-0 !my-2 p-0" />
      <ul className="grid grid-flow-col justify-evenly dark:text-d-xl-blue text-xl-blue gap-2 w-full h-12 p-0 m-0 ">
        {CHATTAB.map((el) => (
          <li
            key={el}
            onClick={() => changeTab(el)}
            className={clsxm(
              "cursor-pointer transition-all duration-200 h-10 w-36 flex justify-center hover:opacity-50",
              el === activeTab &&
                "border-b-2 dark:border-b-d-sm-blue border-b-sm-blue py-0"
            )}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
