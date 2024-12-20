import EventInfoIcon from "@/svg/event-info-icon";
import Link from "next/link";
import React from "react";
import shape1 from "@/public/assets/img/events/event-shape-2.png";
import shape2 from "@/public/assets/img/events/event-shape-3.png";
import sponsorLogo from "@/public/assets/img/events/sponsor-logo.png";
import Image from "next/image";

const EventSidebar = () => {
  return (
    <div className="pl-16 xl:pl-28">
      <div className="bg-white p-6 rounded-lg shadow-md mb-5">
        <div className="relative">
          <Image
            className="absolute top-0 left-0 w-auto h-auto"
            src={shape1}
            style={{ width: "auto", height: "auto" }}
            alt="shape"
          />
          <Image
            className="absolute bottom-0 right-0 w-auto h-auto"
            src={shape2}
            style={{ width: "auto", height: "auto" }}
            alt="shape"
          />
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h5 className="text-lg font-semibold">
                $76.<span className="text-sm">00</span>
              </h5>
              <h5 className="line-through text-sm text-gray-500">$142.00</h5>
            </div>
            <div>
              <span className="text-sm font-semibold text-red-500">
                68% OFF
              </span>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="mr-3">
                <EventInfoIcon />
              </div>
              <div>
                <h5 className="text-sm">
                  <span className="font-medium">End: </span> July 26, 2023 12:30
                  am
                </h5>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <EventInfoIcon />
              </div>
              <div>
                <h5 className="text-sm">
                  <span className="font-medium">Time:</span> 10:45 AM-01:30 PM
                </h5>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <EventInfoIcon />
              </div>
              <div>
                <h5 className="text-sm">
                  <span className="font-medium">Venue: </span> New York, TX
                  82760, US
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md w-full text-center hover:bg-blue-700">
              Enroll <i className="far fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Sponsors</h3>
          <div className="mb-6">
            <Image
              src={sponsorLogo}
              style={{ width: "auto", height: "auto" }}
              alt="Sponsor Logo"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Thomas R. Toe</h3>
            <h4 className="text-sm text-gray-500">
              Email: <span className="text-blue-600">support@educal.com</span>
            </h4>
            <div className="mt-4 flex space-x-4">
              <h4 className="text-sm font-semibold">Share:</h4>
              <ul className="flex space-x-3">
                <li>
                  <Link href="https://www.facebook.com/">
                    <a className="text-blue-600 hover:text-blue-700">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <a className="text-blue-600 hover:text-blue-700">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pinterest.com/">
                    <a className="text-red-600 hover:text-red-700">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
