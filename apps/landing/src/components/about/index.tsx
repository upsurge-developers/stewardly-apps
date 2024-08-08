const About: React.FC<{}> = () => {
  return (
    <section
      className="py-16 bg-black text-white min-[375px]:px-5 min-[375px]:py-6"
      id="about"
    >
      <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-stretch">
        <div className="flex flex-col items-center justify-center sm:w-1/2 md:py-20 xl:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-extralight text-gray-400 dark:text-white md:text-5xl lg:mr-3">
              Why choose Stewardly?
            </h1>
            <p className="mt-6 w-full px-3 text-center text-base leading-6 text-gray-600 dark:text-gray-200 sm:w-96 sm:px-0">
              We have a lot to offer to you, your church, and your congregants,
              with everything we can do to help you grow both in size and in
              faith. <br /> <br />{" "}
              <span className="italic text-slate-400">
                Here are a few reasons why you should choose us.
              </span>
            </p>
            <div className="mx-[25px] mt-12 flex flex-col items-center md:mt-14">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
                role="img"
                aria-label="money"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg1.svg"
                  alt="money"
                />
              </div>
              <h2 className="text-extralight mt-2 text-2xl text-gray-300">
                User Management
              </h2>
              <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 dark:text-gray-200 sm:w-96">
                We give you a platform to help you see each and every one of
                your congregants, giving you a personalized reach not available
                anywhere else.
              </p>
            </div>
            <div className="mx-[25px] mt-7 flex flex-col items-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
                role="img"
                aria-label="phone"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg2.svg"
                  alt="phone"
                />
              </div>
              <h2 className="text-extralight mt-2 text-2xl text-gray-300">
                Group Management
              </h2>
              <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 dark:text-gray-200 sm:w-96">
                We provide the best platform to manage the groups in your
                church, giving them the most seamless flow to excel at what
                their core purpose is.
              </p>
            </div>
            <div className="mx-[25px] mt-7 flex flex-col items-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
                role="img"
                aria-label="ideas"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg3.svg"
                  alt="app"
                />
              </div>
              <h2 className="text-extralight mt-2 text-2xl text-gray-300">
                Sermons and Devotions
              </h2>
              <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 dark:text-gray-200 sm:w-96">
                Our platform allows you to upload your weekly sermons, and to
                give out daily devotions, all for the view of your congregants,
                ensuring they grow closer with God every day.
              </p>
            </div>
            <div className="mx-[25px] mt-7 flex flex-col items-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
                role="img"
                aria-label="bright ideas"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg4.svg"
                  alt="bulb"
                />
              </div>
              <h2 className="text-extralight mt-2 text-2xl text-gray-300">
                Events and Notifications
              </h2>
              <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 dark:text-gray-200 sm:w-96">
                We provide you with a platform to send out both church-wide and
                group-based notifications, and also a platform to plan out
                events. No more disparate groups on platforms that were not
                meant for the job.
              </p>
            </div>
          </div>
          <p className=" mx-6 mt-10 text-justify text-base leading-6 text-gray-600 dark:text-gray-200 sm:mt-24 sm:w-96">
            <span className=" ml-40 text-right text-sm">
              ...and so much more.
            </span>
            <br />
            <br />
            <small className=" italic text-slate-400">
              Not convinced yet? Scroll below to see more of what we offer.
            </small>
          </p>
        </div>
        <div className="px-3 py-12 pr-12 min-[375px]:pr-1 sm:w-1/2 lg:w-1/3 xl:w-1/2">
          <img
            src="https://i.ibb.co/7SmJNvH/about-image.png"
            alt="a woman studying"
            className="hidden h-full rounded-md object-cover object-center md:block"
          />
          <img
            src="https://i.ibb.co/NT0VJcd/pexels-la-miko-3681591-1.png"
            alt="a woman studying"
            className="block h-auto w-auto md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
