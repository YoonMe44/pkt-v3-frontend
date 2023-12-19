// components/PageTitle.tsx
import React from "react";
import Image from "next/image";
import {PageTitle} from "@/types";
interface PageTitleProps {
  pageTitle: PageTitle;
}

const PageTitle = ({pageTitle}: PageTitleProps) => {
  const {title, content_1, content_2} = pageTitle;
  return (
    <div>
      <div className="bounce">
        {/* <h1>{title}</h1> */}

        <i className="lg:text-[48px] md:text-[38px] text-[28px] text-black font-medium">
          {content_1} <br />
          {content_2}
        </i>
        <i className="lg:text-[40px] md:text-[38px] text-[30px] text-red-main font-medium">
          <h1>{title}</h1>
        </i>
      </div>
    </div>
  );
};

export default PageTitle;
