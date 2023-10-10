import CourseCard from "@/components/CourseCard";
import CourseMain from "@/components/CourseMain";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";

const pageTitle = {
  title: "Online Classroom",
  content_1: "",
  content_2: "",
};

const OnlineCourse = () => {
  return (
    <>
      <div>
        <div>
          <div className="pb-2">
            <PageTitle pageTitle={pageTitle} />
          </div>
          <div className="absolute top-0 right-0 overflow-hidden -z-10">
            <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
              <Image
                width={1000}
                height={900}
                // layout="responsive"
                className="transform rotate-11 pt-20"
                src="/statics/images/batchTwo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 lg:bg-custom-white-17 sm:bg-transparent sm:shadow-none w-full mx-auto lg:shadow-custom rounded-[30px] pt-16 pb-16  backdrop-blur-9 ">
        <div className="lg:w-[76%] sm:w-[100%] w-[100%] mx-auto mb-5 flex justify-between items-end ">
          <div className="">
            <div className="relative menu-btn w-[50px] p-[10px] overflow:hidden bg-custom-white-17 cursor-pointer z-[3] shadow-card rounded-[30px] ">
              <div className="line line--1"></div>
              <div className="line line--2"></div>
              <div className="line line--3"></div>
            </div>
            <div className="classNamenav">
              <div className="nav-cat absolute w-[305px] lg:w-[w-388px] lg:left-[11%] sm:left-[-6px]">
                <div className="nav-links">
                  <p className="navTitle">Categories</p>
                  <Link href="" className="link">
                    Japanese
                  </Link>
                  <Link href="" className="link">
                    English
                  </Link>
                  <Link href="" className="link">
                    ITPEC
                  </Link>
                  <Link href="" className="link">
                    Web development
                  </Link>
                  <hr className="w-2/3 bg-red-main h-1 mb-3"></hr>
                  <p className="navTitle">Class Names</p>
                  <Link href="" className="link">
                    Online Class
                  </Link>
                  <a href="" className="link">
                    Local Class
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="searchTitle lg:ml-[4rem] sm:ml-[4rem] ml-[66px] mr-[28px] sm:text-[20px] text-[17Spx] lg:text-[24px] sm:mb-[-42px] mb-[-40px]">
              Find your courses
            </p>
            <form className="search-focus">
              <input
                type="text"
                name="search bg-custom-white-17"
                className="search w-[50px] p-[13px] "
                autoComplete="off"
              ></input>
            </form>
          </div>
        </div>
        <div className="lg:w-[76%] sp:w-[100%] grid lg:grid-cols-3 gap-x-[60px] gap-y-[60px] mx-auto md:grid-cols-2 sm:grid-cols-1 ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </>
  );
};
export default OnlineCourse;