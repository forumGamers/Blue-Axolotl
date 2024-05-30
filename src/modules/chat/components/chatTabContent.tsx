"use client";

import Breakline from "@/components/atoms/contents/breakLine";
import useChat, { CHATTAB } from "@/modules/chat/hooks/useChat";
import clsxm from "@/lib/clsxm";
import ChatPage from "./ChatPage";

export default function ChatTabContent() {
  const { changeTab, activeTab } = useChat();
  return (
    <>
      <Breakline className="dark:text-d-xl-blue m-0 !my-2 p-0" />
      <ul className="grid grid-flow-col justify-evenly dark:text-d-xl-blue text-xl-blue gap-2 w-full h-12 p-0 m-0 transition-all duration-100">
        {CHATTAB.map((el) => (
          <li
            key={el}
            className={clsxm(
              "cursor-pointer transition-all duration-200 h-10 lg:w-36 flex justify-center hover:opacity-50 text-d-xs-blue dark:text-xs-blue",
              el === activeTab &&
                "border-b-2 border-b-d-sm-blue dark:border-b-sm-blue py-0"
            )}
          >
            <button onClick={() => changeTab(el)}>{el}</button>
          </li>
        ))}
      </ul>
      <Breakline className="dark:text-d-xl-blue m-0 !-my-1 p-0" />
      <ChatPage />
    </>
  );
}
