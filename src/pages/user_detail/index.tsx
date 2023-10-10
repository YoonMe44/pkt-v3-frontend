import Image from "next/image";
import RedButton from "../../../src/components/RedButton";
import PageTitle from "../../components/PageTitle";
import Link from "next/link";
import LoginRedButton from "@/components/LoginRedButton";

const User_detail = () => {
  const pageTitle = {
    title: "User detail",
    content_1: "",
    content_2: "",
  };
  const userData = {
    StudentID: "sdid_00001",
    Name: "Poe Kyi Thar",
    Email: "Poe@gmail.com",
    Phone: "09-977514241",
    Address: "No.123, Bahan Township",
    Birthday: "12-2-20000",
    NRC: "12/Yakana(N)",
    Education: "Bsc",
    SocialAcc: "Poe",
  };

  return (
    <div>
      <main className="bg-gray-100 p-4">
        <section className="container mx-auto py-12">
          <div className="w-[634px] mx-auto rounded-26 px-0 py-35 pb-50 bg-gray-300 bg-opacity-40 inset-shadow-md animate-fadeIn duration-2500 ease-in-out p-4 shadow-md rounded-lg">
            <a href="user.html" className="pl-[15px] absolute">
              <img src="img/back.png" />
            </a>
            <h5 className="text-xl font-semibold mb-4">User Details</h5>
            <div className="circle flex items-center space-x-4">
              <div className="user">
                <img
                  src="img/Poe2.jpg"
                  className="userElements w-16 h-16 rounded-full"
                />
              </div>
              <a href="profile.html" className="flex items-center">
                <div className="mypage_icon bg-blue-500 rounded-full p-2">
                  <img src="img/user2.png" className="userElements w-8 h-8" />
                </div>
                <div className="arc bg-blue-500 h-1 w-6 ml-2 rounded-full"></div>
              </a>
              <a href="purchase_history.html" className="flex items-center">
                <div className="mypage1_icon bg-green-500 rounded-full p-2">
                  <img src="img/money.png" className="userElements w-8 h-8" />
                </div>
                <div className="arc1 bg-green-500 h-1 w-6 ml-2 rounded-full"></div>
              </a>
              <a href="register_courses.html" className="flex items-center">
                <div className="mypage2_icon bg-purple-500 rounded-full p-2">
                  <img src="img/class.png" className="userElements w-8 h-8" />
                </div>
                <div className="arc2 bg-purple-500 h-1 w-6 ml-2 rounded-full"></div>
              </a>
            </div>
            <div className="w-[80%] mt-4 mx-auto">
              <table className="table-auto">
                <tbody>
                  {Object.entries(userData).map(([key, value]) => (
                    <tr key={key}>
                      <td className="w-[40%] font-medium">{key}</td>
                      <td className="w-[40%] border-l-2 border-solid border-gray-400 pl-[80px] pr-4 text-[15px] text-gray-600">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User_detail;
