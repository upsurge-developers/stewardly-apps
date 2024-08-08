import React from 'react'
import { IconCheck } from '@tabler/icons-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'

const Pricing: React.FC<object> = () => {
  return (
    <section
      className="bg-black text-white lg:h-[100vh] xl:h-[90vh] pb-6"
      id="pricing"
    >
      <div className="container mx-auto flex flex-col pt-10 lg:pt-12">
        <div className="flex flex-col">
          <h1 className="text-center text-3xl font-semibold md:text-4xl">
            The Right Plan for you
          </h1>
          <p className="mx-3 mt-2.5 text-center text-[16px] sm:text-[21px] lg:mx-auto lg:w-1/2 lg:text-2xl ">
            We have several plans to showcase your Business. Get everything you
            need
          </p>
        </div>
        <div className="mx-auto mt-10 flex flex-col items-center gap-2 lg:mt-20 lg:flex-row">
          <Card className="bg-neutral-950 text-white">
            <CardHeader>
              <CardTitle className="mb-7 w-full py-2 text-center text-3xl font-semibold">
                Basic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className=" my-auto w-full">
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 1000 Congregants
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 25 Groups
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  5 group limit for each Congregant
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 1000 notifications
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 1000 events
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Text only devotions and Sermons
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="relative mx-auto my-auto w-fit px-3 text-center text-base">
                <span className="text-lg font-light">Ksh.</span>
                <span className="text-2xl font-semibold">2500</span>
                <span className="text-lg font-light text-gray-600">/month</span>
              </p>
              <Button
                variant="ghost"
                className="mx-auto mt-2 w-fit cursor-pointer rounded-3xl px-5 py-2 border border-gray-400"
              >
                GET NOW
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-neutral-950 text-white">
            <CardHeader>
              <CardTitle className="mb-7 w-full py-2 text-center text-3xl font-semibold">
                Advanced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className=" my-auto w-full">
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 5000 Congregants
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Up to 50 Groups
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  10 group limit for each Congregant
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited notifications
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited events
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Text + audio devotions and Sermons
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="relative mx-auto my-auto w-fit px-3 text-center text-base">
                <span className="text-lg font-light">Ksh.</span>
                <span className="text-2xl font-semibold">5000</span>
                <span className="text-lg font-light text-gray-600">/month</span>
              </p>
              <Button
                variant="brand"
                className="mx-auto w-fit cursor-pointer rounded-3xl px-5 py-2 mt-2"
              >
                GET NOW
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-neutral-950 text-white">
            <CardHeader>
              <CardTitle className="mb-7 w-full py-2 text-center text-3xl font-semibold">
                Premium
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className=" my-auto w-full">
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited Congregants
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited Groups
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited groups for each Congregant
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited notifications
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Unlimited events
                </li>
                <li className="mb-2 flex flex-row align-middle">
                  <IconCheck className="h-6 w-6 m-2 p-1 border-2 rounded-full" />
                  Text, audio and video devotions <br /> and Sermons
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="relative mx-auto my-auto w-fit px-3 text-center text-base">
                <span className="text-lg font-light">Ksh.</span>
                <span className="text-2xl font-semibold">7500</span>
                <span className="text-lg font-light text-gray-600">/month</span>
              </p>
              <Button
                variant="ghost"
                className="mx-auto mt-2 w-fit transform cursor-pointer rounded-3xl px-5 py-2 border border-gray-400"
              >
                GET NOW
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Pricing
