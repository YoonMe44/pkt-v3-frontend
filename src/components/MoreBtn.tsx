import { SidebarContext } from "@/components/Layouts/MainLayout";
import { language } from "@/lang/lang";
import Link from "next/link";
import { useContext } from "react";

interface MoreBtnProps {
  id?:string
  link?:string
}
const MoreBtn = ({id,link}: MoreBtnProps) => {
  let { lang } = useContext(SidebarContext);
    return (
      <div className="w-[100px] mx-auto mt-4">
        <Link href={`${link}`} className="cta">
          <span>{language[lang].more}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>
      </div>
    );
}
export default MoreBtn;