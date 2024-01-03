import { Fredoka } from "next/font/google";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createContext, useContext, useState } from 'react';
import { useAuth } from "@/hooks/auth";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

type SideBarStateContextType = {
  lang: number;
  setLang: Dispatch<SetStateAction<number>>;
  user: any;
  setUser: Dispatch<SetStateAction<any>>
  resetInitialState: () => void
};

const initSidebarState = {
  lang: 0,
  setLang: () => { },
  user: null,
  setUser: () => { },
  resetInitialState: () => { }
}
export const SidebarContext = createContext<SideBarStateContextType>(initSidebarState);

const MainLayout = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState(0);
  const [user, setUser] = useState(null);

  const resetInitialState = () => {
    setLang(0);
    setUser(null);
  }


  return (
    <div className={`${fredoka.variable} font-sans`}>
      <SidebarContext.Provider value={{ lang, setLang, user, setUser, resetInitialState }}>
        <Header />
        <main
          className={`max-w-full sm:max-w-[90%] justify-between mx-auto px-4 py-20 ${fredoka.variable} font-sans`}
        >
          {children}
        </main>
        <Footer />
      </SidebarContext.Provider>
    </div>
  );
};

export default MainLayout;
