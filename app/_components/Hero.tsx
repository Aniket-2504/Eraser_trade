import React from 'react'

function Hero() {
  return (
    <section className="bg-black">
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-20 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
        Take Learning
        <strong className="font-extrabold text-white sm:block"> Into Next Level. </strong>
      </h1>

      <p className="mt-4 text-slate-200 sm:text-xl/relaxed">
        Explore and teach how pattern works on realtime market 
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Start Teaching
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero