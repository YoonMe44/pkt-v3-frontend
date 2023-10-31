import React, {useState} from "react";
import Image from "next/image";
import RedButton from "./RedButton";

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(""); // Define selectedCountry and setSelectedCountry here

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="sm:3/4 md:w-3/4 lg:w-3/4 -mt-6  mx-auto bg-custom-white-17 backdrop-blur-9  shadow-custom lg:flex lg:flex-wrap rounded-[30px] lg:py-20 py-8 lg:px-10 px-2  ">
      <div className="w-full sm:pl-4 pl-0">
        <div className="px-2  md:px-[25px]">
          <i className="md:text-xl text-red-main mt-4 font-medium">
            Sent a Message
          </i>
          <p className="text-md text-slate-500 font-medium">
            You can fill in the information below and inquire about what you
            want to know. You can also inquire through the phone number
          </p>
          <form className="mt-10  ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-0 sm:gap-0 lg:gap-6 gap-0">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="username"
                  className="peer-focus:font-medium absolute text-lg-[20px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-lg-[20px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-0 sm:gap-0 lg:gap-6 gap-0">
              <div className="relative z-0 w-full mb-6 group">
                <select
                  id="country"
                  name="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[2px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                  required
                >
                  <option
                    value=""
                    className="text-lg font-medium text-gray-500"
                  >
                    Interested In
                  </option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">Korea</option>
                  <option value="Taiwan">Taiwan</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  name="ph-no"
                  id="pn-no"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-lg-[20px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="floating_first_name"
                rows={4}
                id="floating_first_name"
                className="border-l-0 border-r-0 border-t-0 block py-3.5 px-0 w-full text-sm border-b-[2px] text-black  border-b-[3px]important bg-transparent  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_first_name"
                className="pt-[23px] pl-[2px] peer-focus:font-medium absolute text-sm md:text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[-1px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-end">
              {/* <button
                type="submit"
                className="text-white bg-gray-500 hover:bg-red-main  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-main dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button> */}
              <RedButton title="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div className="px-2  md:px-[25px] w-full my-8 mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="mt-[50px] text-2xl md:text-xl text-red-main font-medium">
            Branch 1
          </h1>
          <p className="font-medium text-lg">Call Us</p>
          <p className="text-md text-slate-500 font-medium ">
            Those who want to inquire can contact the following phone numbers
            during office hours (9:00-5:00).
          </p>
          <div className="flex text-sm font-medium text-red-main">
            <div className="flex-none w-10 h-14">
              <Image
                src={"/statics/images/phone.svg"}
                width={20}
                height={18}
                alt="phone"
                className=""
              />
            </div>
            <div className="flex-1 w-32 ml-[-11px]">+959 251801804</div>
          </div>
          <div className="lg:pt-6 lg:mt-[-50px] flex flex-col gap-1 ">
            <p className="font-medium text-lg ">Visit Us</p>
            <p className="text-md text-slate-500 font-medium">
              Leverage PKT to further your future. For those who want to
              inquire, you can come and inquire without any holidays
            </p>
            <div className="flex ">
              <div className="flex-none w-10 h-14 ">
                <Image
                  src={"/statics/images/location.svg"}
                  width={20}
                  height={18}
                  alt="location"
                  className=""
                />
              </div>
              <div className="flex-1 w-32  text-sm font-medium text-red-main">
                No(71), Room A, Ground Floor, Upper Pazundaung Road Mingalar
                Taung Nyunt Township,Yangon.
              </div>
            </div>
          </div>
          <div className=" flex justify-center w-full">
            <div className="w-full ">
              <div>
                <iframe
                  className="shadow-custom     rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.8842710575786!2d96.17198571447675!3d16.782432388443738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6232ed2ac1%3A0x5817e6d2d92f0b44!2sPKT%20IT%20%26%20Japanese%20Language%20Center!5e0!3m2!1sen!2smm!4v1585037167965!5m2!1sen!2smm"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mx-auto my-8 px-2  md:px-[25px]">
        <div className="flex flex-col gap-1">
          <h1 className="mt-[50px] text-2xl md:text-xl text-red-main font-medium">
            Branch 2
          </h1>
          <p className="font-medium text-lg">Call Us</p>
          <p className="text-md text-slate-500 font-medium ">
            Those who want to inquire can contact the following phone numbers
            during office hours (9:00-5:00).
          </p>
          <div className="flex text-sm font-medium text-red-main">
            <div className="flex-none w-10 h-14">
              <Image
                src={"/statics/images/phone.svg"}
                width={20}
                height={18}
                alt="phone"
                className=""
              />
            </div>
            <div className="flex-1 w-32 ml-[-11px]">+959 251801805</div>
          </div>
          <div className="lg:pt-6 lg:mt-[-50px] flex flex-col gap-4 ">
            <p className="font-medium text-lg ">Visit Us</p>
            <p className="text-md text-slate-500 font-medium">
              Leverage PKT to further your future. For those who want to
              inquire, you can come and inquire without any holidays
            </p>
            <div className="flex ">
              <div className="flex-none w-10 h-14 ">
                <Image
                  src={"/statics/images/location.svg"}
                  width={20}
                  height={18}
                  alt="location"
                  className=""
                />
              </div>
              <div className="flex-1 w-32  text-sm font-medium text-red-main">
                No(19),Thiri Haymar Street,Zarwana Ward,Thingangyun Township,
                Yangon.
              </div>
            </div>
          </div>
          <div className=" flex justify-center w-full">
            <div className="w-full ">
              <div>
                {/* <iframe
                  className="shadow-lg shadow-gray-500/40 rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61105.00605846406!2d96.1456771[…]%20Branch%202!5e0!3m2!1sen!2smm!4v1697191482779!5m2!1sen!2smm"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  aria-hidden="false"
                ></iframe> */}
                <iframe
                  className=" shadow-custom rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0314378504672!2d96.19785801086299!3d16.824796418701403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1939b1c0eb671%3A0x4cf8004127244fc2!2sPKT%20Education%20Center%20Branch%202!5e0!3m2!1sen!2smm!4v1697276273562!5m2!1sen!2smm"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="mt-[50px] text-2xl pl-[25px] md:text-xl text-red-main font-medium">
        Branch 1
      </h1>
      <p className="font-medium text-lg lg:mt-[95px] mt-8 lg:ml-[-95px] ml-0 pl-[25px]">Call Us</p>
      <p className="text-md text-slate-500 font-medium lg:mt-[27px] lg:ml-[-57px] mt-0 pl-[25px] lg:pl-0">
        Those who want to inquire can contact the following phone numbers during
        office hours (9:00-5:00).
      </p>
      <div className="flex mt-[155px] ml-[-715px] text-sm font-medium text-red-main mb-[-10px]">
        <div className="flex-none w-10 h-14">
          <Image
            src={"/statics/images/phone.svg"}
            width={20}
            height={18}
            alt="phone"
            className=""
          />
        </div>
        <div className="flex-1 w-32 ml-[-11px]">+959 251801804</div>
      </div>
      <div className="lg:pt-10 lg:mt-[-50px] ">
        <p className="font-medium text-lg ml-[5px] pl-[25px]">Visit Us</p>
        <p className="text-md text-slate-500 font-medium ml-[6px] mt-[5px] pl-[25px]">
          Leverage PKT to further your future. For those who want to inquire,
          you can come and inquire without any holidays
        </p>
        <div className="flex mt-[6px] pl-[25px]">
          <div className="flex-none w-10 h-14 ml-[2px]">
            <Image
              src={"/statics/images/location.svg"}
              width={20}
              height={18}
              alt="location"
              className=""
            />
          </div>
          <div className="flex-1 w-32  text-sm font-medium text-red-main ml-[-15px]">
            No(71), Room A, Ground Floor, Upper Pazundaung Road Mingalar Taung
            Nyunt Township,Yangon.
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center w-full">
        <div className="w-full ">
          <div>
            <iframe
              className="shadow-lg shadow-gray-500/40 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.8842710575786!2d96.17198571447675!3d16.782432388443738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6232ed2ac1%3A0x5817e6d2d92f0b44!2sPKT%20IT%20%26%20Japanese%20Language%20Center!5e0!3m2!1sen!2smm!4v1585037167965!5m2!1sen!2smm"
              width="100%"
              height="300"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <a
          className="bg-red-600 px-6 py-3 rounded-l-[10px] rounded-r-[10px] text-red-100"
          href="#"
        >
          Batch 2
        </a>
      </div>
      <p className="font-medium text-lg mt-[95px] ml-[-95px]">Call Us</p>
      <p className="text-md text-slate-500 font-medium mt-[127px] ml-[-57px]">
        Those who want to inquire can contact the following phone numbers during
        office hours (9:00-5:00).
      </p>
      <div className="flex mt-[155px] ml-[-715px] text-sm font-medium text-red-main mb-[-10px]">
        <div className="flex-none w-10 h-14">
          <Image
            src={"/statics/images/phone.svg"}
            width={20}
            height={18}
            alt="phone"
            className=""
          />
        </div>
        <div className="flex-1 w-32 ml-[-11px]">+959 251801805</div>
        <div className="lg:pt-10 md:ml-8 lg:ml-0 ml-0 mt-[-50px]">
          <p className="font-medium text-lg ml-[-159px] text-gray-900 mt-[50px]">
            Visit Us
          </p>
          <p className="text-md text-slate-500 font-medium ml-[-158px] mt-[5px]">
            Leverage PKT to further your future. For those who want to inquire,
            you can come and inquire without any holidays
          </p>
          <div className="flex mt-[6px]">
            <div className="flex-none w-10 h-14 ml-[-163px]">
              <Image
                src={"/statics/images/location.svg"}
                width={20}
                height={18}
                alt="location"
                className=""
              />
            </div>
            <div className="flex-1 w-32  text-sm font-medium text-red-main ml-[-15px]">
              No(19),Thiri Haymar Street,Zarwana Ward,Thingangyun Township,
              Yangon.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center w-full">
        <div className="w-full ">
          <div>
            <iframe
              className="shadow-lg shadow-gray-500/40 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.8842710575786!2d96.17198571447675!3d16.782432388443738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6232ed2ac1%3A0x5817e6d2d92f0b44!2sPKT%20IT%20%26%20Japanese%20Language%20Center!5e0!3m2!1sen!2smm!4v1585037167965!5m2!1sen!2smm"
              width="100%"
              height="300"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Contact;
