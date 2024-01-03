import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

interface LoginRedButtonProps {
  title?: string;
}

const GoogleLoginDynamic = dynamic(() => import("react-google-login"), {
  ssr: false,
});

const LoginRedButton: React.FC<LoginRedButtonProps> = ({ title }) => {
  const responseGoogle = (response: any) => {
    // console.log(response);
  };
  return (
    <div>
      <button className="redBtn">
        <span className="shadow"></span>
        <span className="edge"></span>
        <Link href={"/register"} className="front">
          <GoogleLoginDynamic
            clientId="753695289374-b99bdu9aspgrcu6vtpltgc7bhbjhglki.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(props) => (
              <button
                onClick={props.onClick}
                disabled={props.disabled}
                className="text-white font-bold rounded"
              >
                <div className="inline w-[38px] h-[1px] absolute pb-[39px] mr-[200px] mt-[2px] xs:mr-[200px] s:mr-[158px]">
                  <Image
                    src={"https://img.icons8.com/color/48/google-logo.png"}
                    width={62}
                    height={62}
                    alt="pktlogo"
                    className="mx-auto float-right bg-white rounded-l-[12px] mr-[24px] mt-[-11px]"
                  />
                </div>
                <span className="ml-[24px]">Sign up with Google</span>
              </button>
            )}
          />
        </Link>
      </button>
    </div>
  );
};

export default LoginRedButton;
