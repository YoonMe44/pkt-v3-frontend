import React, {useState} from "react";
import Image from "next/image";

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="sm:3/4 md:w-3/4 lg:w-3/4 mt-16  mx-auto bg-transparent backdrop-blur-9  border-solid border-2 lg:flex lg:flex-wrap rounded-xl lg:py-20 py-8 lg:px-10 px-2  ">
      <div className="lg:w-2/3 w-full">
        <div className="pl-8">
          <i className="md:text-xl text-red-main mt-4 font-medium">
            Sent a Message
          </i>
          <p className="text-md text-slate-500 font-medium">
            You can fill in the information below and inquire about what you
            want to know. You can also inquire through the phone number
          </p>

          <form className="mt-10 mr-10 ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-0 sm:gap-0 lg:gap-6 gap-0">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-3.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm md:text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-3.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm md:text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 md:gap-0 sm:gap-0 lg:gap-6 gap-0">
              <div className="relative z-0 w-full mb-6 group">
                <div className="select-icon">
                  {/* SVG arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <select
                  id="country"
                  name="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  required
                >
                  <option value="" className="text-sm md:text-md text-gray-500">
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
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm md:text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-3.5 px-0 w-full text-sm border-b-[3px] text-gray-900  border-b-[3px]important bg-transparent  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm md:text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-end">
              {/* <button type="submit" className="text-white bg-gray-500 hover:bg-red-main  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-main dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
            </div>
          </form>
        </div>
      </div>

      <div className="lg:border-l-[4px] lg:w-1/3 w-full">
        <div className="ml-8 mt-8 lg:inline-block md:flex lg:gap-3">
          <div>
            <p className="font-medium text-lg">Call Us</p>
            <p className="text-md text-slate-500 font-medium mt-6">
              Those who want to inquire can contact the following phone numbers
              during office hours (9:00-5:00).
            </p>
            <div className="flex mt-4 text-sm font-medium text-red-main">
              <div className="flex-none w-10 h-14">
                <Image
                  src={"/statics/images/phone.svg"}
                  width={20}
                  height={18}
                  alt="phone"
                  className=""
                />
              </div>
              <div className="flex-1 w-32 ">
                +959 251801804 　+959 251801805
              </div>
            </div>
          </div>
          <div className="lg:pt-10 md:ml-8 lg:ml-0 ml-0">
            <p className="font-medium text-lg">Visit Us</p>
            <p className="text-md text-slate-500 font-medium mt-6">
              Leverage PKT to further your future. For those who want to
              inquire, you can come and inquire without any holidays
            </p>
            <div className="flex mt-4">
              {/* <Image
                src={"/statics/images/location.svg"}
                width={20}
                height={18}
                alt="phone"
                className=""
              />
              <p className='mt-4 text-sm font-medium text-red-main'>
                <span> No(71), Room A, Ground Floor, Upper Pazundaung Road Mingalar Taung Nyunt Township,Yangon.</span>
              </p> */}
              <div className="flex-none w-10 h-14">
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
    </div>
  );
};

export default Contact;
