import {
  IconAddressBook,
  IconCash,
  IconDeviceDesktop,
  IconHeartHandshake,
  IconLayoutDashboard,
  IconNetwork,
} from "@tabler/icons-react";
import React from "react";

const Features: React.FC<object> = () => {
  return (
    <section
      className="relative flex h-fit flex-col p-4 pb-14 text-white bg-black"
      id="features"
    >
      <div className="mb-16 flex flex-col items-center justify-center">
        <h1 className="mb-2 align-baseline text-7xl font-extralight">
          Features
        </h1>
        <p className="align-baseline text-2xl font-bold text-gray-400">
          Here is what you stand to gain when you use our platform
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:px-32">
        <div className="col-span-3 grid grid-cols-1 grid-rows-6 gap-8 md:grid-cols-3 md:grid-rows-2">
          <div className="rows-span-1 col-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-5 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500 sm:px-8">
              <div className="flex justify-center">
                <IconDeviceDesktop
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">
                Content Management
              </h3>

              <p className="mx-5 mt-2 text-center text-sm">
                Easily manage and publish content such as sermons, events, and
                announcements.
              </p>
            </div>
          </div>
          <div className="rows-span-1 col-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-8 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
              <div className="flex justify-center">
                <IconAddressBook
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">
                Congregant Directory
              </h3>
              <p className="mx-5 mt-2 text-center text-sm">
                Our platform allows you to see who are the members of your
                church, and gives you their contact details allowing for more
                direct connections with them
              </p>
            </div>
          </div>
          <div className="cols-span-1 rows-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-8 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
              <div className="flex justify-center">
                <IconNetwork
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">Direct Connection</h3>
              <p className="mx-5 mt-2 text-center text-sm">
                Connect with your congregants via messaging and notifications to
                keep them informed and engaged.
              </p>
            </div>
          </div>
          <div className="rows-span-1 col-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-8 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500 ">
              <div className="flex justify-center">
                <IconHeartHandshake
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">Prayer Requests</h3>
              <p className="mx-5 mt-2 text-center text-sm">
                Easily see what is troubling your congregants and what they
                would like you to pray about for them.
              </p>
            </div>
          </div>
          <div className="cols-span-1 rows-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-8 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
              <div className="flex justify-center">
                <IconCash
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">
                Financial Management
              </h3>
              <p className="mx-5 mt-2 text-center text-sm">
                Stewardly enables you to track the financial details in your
                church. Whether from donations or from Sunday offerings, it is
                all there.
              </p>
            </div>
          </div>
          <div className="cols-span-1 rows-span-1">
            <div className="align-center m-0 flex h-full w-full  flex-col rounded-md px-8 py-12 text-center shadow-xl bg-neutral-900 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
              <div className="flex justify-center">
                <IconLayoutDashboard
                  className="animate-slow-bounce rounded-full p-1 text-center"
                  size={42}
                />
              </div>
              <h3 className=" mt-4 text-[21px] font-bold">
                User-friendly Interface
              </h3>
              <p className="mx-5 mt-2 text-center text-sm">
                Intuitive and easy-to-use interface for both church
                administrators and congregants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
