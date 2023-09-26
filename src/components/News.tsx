import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center min-h-screen">
        {/* Adjust the container class for responsiveness */}
        <div className="w-full max-w-screen-lg overflow-y-scroll bg-white border border-gray-600 rounded-lg dark:bg-gray-700 dark:border-gray-600 h-auto sm:h-[600px] scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-300">
          <ul className="m-4 p-0">
            {/* For each news item */}
            {newsItems.map((item, index) => (
              <li
                key={index}
                className="border border-red-600 dark:border-red-600 rounded-tl-[26px] rounded-bl-[26px] m-4"
              >
                <div className="flex items-center justify-center w-full">
                  <Image
                    className="rounded-tl-[26px] rounded-bl-[26px]"
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={300}
                    height={185}
                  />
                  <div className="py-6 px-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300 pb-10 font-semibold">
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center justify-end">
                      <button className="text-red-600 hover:underline">
                        more
                        <span className="text-sky-800 ml-2">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;

// Sample data for news items
const newsItems = [
  {
    imageSrc: "/assets/news1.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "Many young Myanmar people, including myself, go abroad to work in order to change their lives...",
  },
  {
    imageSrc: "/assets/news2.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "As an opportunity to become a recognized technician in Japan with just a 2-year investment...",
  },
  {
    imageSrc: "/assets/news3.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "JLPT, short for Japanese Language Proficiency Test, is an internationally recognized Japanese proficiency test...",
  },
  {
    imageSrc: "/assets/news4.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "An opportunity to become a recognized technician in Japan with just a 2-year investment...",
  },
  {
    imageSrc: "/assets/news1.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "Many young Myanmar people, including myself, go abroad to work in order to change their lives...",
  },
  {
    imageSrc: "/assets/news2.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "As an opportunity to become a recognized technician in Japan with just a 2-year investment...",
  },
  {
    imageSrc: "/assets/news3.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "JLPT, short for Japanese Language Proficiency Test, is an internationally recognized Japanese proficiency test...",
  },
  {
    imageSrc: "/assets/news4.jpg",
    imageAlt: "News Image: New message from Jese Leos",
    description:
      "An opportunity to become a recognized technician in Japan with just a 2-year investment...",
  },
];
