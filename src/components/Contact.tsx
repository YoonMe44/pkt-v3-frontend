import React, {useState} from "react";
import Image from "next/image";

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="sm:w-1/2 md:w-1/2 lg:w-3/4 mx-auto border-solid border-2 flex flex-wrap rounded-xl py-20 px-10 bg-[rgba(255,255,255,0.17)] shadow-md inset-shadow-md">
      <div className="w-2/3">
        <div>
          <i className="md:text-xl text-red-main mt-4 font-medium">
            Sent a Message
          </i>
          <p className="text-md text-slate-500 font-medium">
            You can fill in the information below and inquire about what you
            want to know. You can also inquire through the phone number
          </p>
          {/* <form>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlhtmlFor="interest">Interest In:</label>
                <select
                  id="interest"
                  name="interest"
                  placeholder="Interested In"
                  required
                >
                  <option value="">Select One</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>

                <label htmlhtmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlhtmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form> */}
          <form className="mt-10 mr-10">
            <div className="grid md:grid-cols-2 md:gap-6">
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
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
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
                  <option value="" className="text-md text-gray-500">
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
                  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[3px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-gray-500 hover:bg-red-main  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-main dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-l-[4px] w-1/3">
        <div className="ml-8 mt-8">
          <div>
            <p className="font-medium text-lg">Call Us</p>
            <p className="text-md text-slate-500 font-medium mt-6">
              Those who want to inquire can contact the following phone numbers
              during office hours (9:00-5:00).
            </p>
            <div className="flex mt-4 text-sm font-medium text-red-main">
              {/* <div className='flex'>
                <Image
                  src={"/statics/images/phone.svg"}
                  width={20}
                  height={18}
                  alt="phone"
                  className=""
                />
                +959 251801804　+959 251801805

              </div> */}
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
          <div className="pt-10">
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

      {/* <div className="mt-10 flex justify-center w-full">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-main dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div> */}
    </div>
  );
};

export default Contact;
