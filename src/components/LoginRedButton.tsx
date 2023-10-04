import Link from "next/link";
import Image from "next/image";

interface LoginRedButtonProps {
  title?: string;
}
const LoginRedButton: React.FC<LoginRedButtonProps> = ({ title }) => {
  return (
    <div className="lg:mt-0 md:mt-0 xs:mt-3 sm:mt-3 flex flex-wrap">
      <button className="redBtn">
        <span className="shadow"></span>
        <span className="edge"></span>
        <Link href={"/login"} className="front">
          <div className="flex items-center justify-center">
            <div className="inline w-[38px] h-[1px] absolute pb-[39px] mr-[200px] mt-[2px] xs:mr-[200px] s:mr-[158px]">
              <Image
                src={"https://img.icons8.com/color/48/google-logo.png"}
                width={62}
                height={62}
                alt="pktlogo"
                className="mx-auto float-right bg-white rounded-l-[12px]"
              />
            </div>
            <span className="pr-10"></span>
            {title}
          </div>
        </Link>
      </button>
    </div>
  );
};
export default LoginRedButton;
