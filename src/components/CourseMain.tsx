import CourseCard from "./CourseCard";
import PageTitle from "./PageTitle";
import Image from "next/image";
const CourseMain = () => {
    return (
      <div>
        <div className="pb-[231px] w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
          <i className="text-[48px] text-red-main font-medium">
            <PageTitle title="Courses" />
          </i>
        </div>
        <div className="absolute top-0 right-0 overflow-hidden -z-10">
          <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-40"
              src="/statics/images/batch3.JPG"
              alt=""
            />
          </div>
        </div>
        <div className="bg-custom-white-17 w-full mx-auto shadow-custom rounded-[30px] pt-16 backdrop-blur-9">
          <div className="  w-[93%] mx-auto mb-5 ">
            <p className="searchTitle mb-[-55px] ml-28">Find your courses</p>
            <form className="search-focus">
              <input type="text" name="search" className="search" autoComplete="off"></input>
            </form>
            <div className="menuGroup">
                 <div className="menu-btn">
                     <div className="line line--1"></div>
                     <div className="line line--2"></div>
                     <div className="line line--3"></div>
                 </div>
                 <div className="classNamenav">
                     <div className="nav-cat">
                         <div className="nav-links">
                             <p className="navTitle">Categories</p>
                             <a href="" className="link">Japanese</a>
                             <a href="" className="link">English</a>
                             <a href="" className="link">ITPEC</a>
                             <a href="" className="link">Web development</a>
                           
                             <p className="navTitle">classNamees</p>
                             <a href="" className="link">Online Class</a>
                             <a href="" className="link">Local Class</a>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
          <div className="w-[76%] grid grid-cols-3 gap-x-[60px] gap-y-[60px] mx-auto ">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    );
    
}
export default CourseMain;