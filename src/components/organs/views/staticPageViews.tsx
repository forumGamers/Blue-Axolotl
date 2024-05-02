import type { ChildrenProps } from "@/interfaces";
import InitPage from "../hoc/initPage";
import { Suspense } from "react";
import Loading from "@/components/atoms/loaders/pageLoader";
import BlogNavbar from "../navbar/blogNavbar";
import BlogFooter from "../footer/blogFooter";

export default function StaticViews({ children }: ChildrenProps) {
  return (
    <InitPage>
      <Suspense fallback={<Loading />}>
        <BlogNavbar />
        <main className="flex flex-col justify-center h-full w-full no-scrollbar scroll-smooth transition-all duration-300 lg:ml-72 lg:max-w-[854px]">
          {children}
        </main>
        <BlogFooter />
      </Suspense>
    </InitPage>
  );
}
