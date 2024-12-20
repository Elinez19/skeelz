import Link from "next/link";
import React from "react";
import EventSidebar from "@/components/EventSidebar";
import EventImage from "@/public/assets/img/events/event-1.jpg";
import Image from "next/image";

const EventAreaSection = () => {
  return (
    <section className="event__area pb-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="events__wrapper">
              <div className="events__thumb mb-8">
                <Image
                  src={EventImage}
                  alt="Event Image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="events__details mb-8">
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-gray-700">
                  He legged it up the kyver have it mush super me old mucker
                  cheeky naff that are you taking the piss, blow off down the
                  pub bite your arm off the wireless boot cor blimey guvnor
                  happy days bender what a load of rubbish, say pardon me horse
                  play spiffing Why car boot gosh bubble and squeak. Cheers
                  Richard bugger show off show off pick your nose and blow off
                  get stuffed mate chancer in my flat loo, bevvy amongst
                  hunky-dory bender bubble and squeak me old mucker vagabond,
                  barmy spend a penny chimney pot young delinquent bum bag the
                  {`bee's`} knees chap, gosh nice one knees up the wireless
                  Charles such a fibber. Mush barmy bleeding Jeffrey pardon me
                  barney grub loo cup of tea bubble and squeak bugger all mate
                  say, I bloke matie boy tickety-boo give us a bell up the duff
                  bugger lurgy wind up I {`don't`} want no agro.
                </p>
              </div>
              <div className="events__allow mb-10">
                <h3 className="text-xl font-semibold">
                  This event will allow participants to:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>
                    <i className="fas fa-check-circle text-green-500"></i>{" "}
                    Business's managers, leaders
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-green-500"></i>{" "}
                    Downloadable lectures, code and design assets for all
                    projects
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-green-500"></i>{" "}
                    Anyone who is finding a chance to get the promotion
                  </li>
                </ul>
              </div>
              <div className="events__tag">
                <span className="text-sm text-gray-500 mr-2">
                  <i className="fas fa-tag"></i>
                </span>
                <Link href="#" className="text-blue-500 hover:underline">
                  Big data,
                </Link>
                <Link href="#" className="text-blue-500 hover:underline ml-2">
                  Data analysis,
                </Link>
                <Link href="#" className="text-blue-500 hover:underline ml-2">
                  Data modeling
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <EventSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAreaSection;
