import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Contact: React.FC<object> = () => {
  return (
    <section className="flex flex-1 items-center bg-black">
      <div className="flex w-screen flex-col lg:mt-10 xl:mt-5">
        <h1 className="text-center text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
          <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            Coming{' '}
          </span>

          <span className="from-blue-500 bg-gradient-to-tr via-pink-500 to-red-500 bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400 sm:px-3 md:px-0 md:text-xl">
          We are still working on the platform, making it better and easier for
          you to manage your church.
        </p>

        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
          <form className="mt-8 flex flex-grow-0 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <Input
              id="email"
              type="email"
              name="email"
              className="mx-3 rounded-md border px-6 py-3 sm:mx-2"
              placeholder="Email Address"
            />

            <Button variant="success" type="submit">
              Notify Me
            </Button>
          </form>
        </div>

        <p className="text-md mt-8 text-center text-gray-600 md:text-xl">
          Notify me when App is launched :)
        </p>
      </div>
    </section>
  )
}

export default Contact
