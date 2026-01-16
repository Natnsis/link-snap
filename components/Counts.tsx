"use client"
import CountUp from "react-countup";
const Counts = () => {
  return (
    <main className="flex justify-center mt-20">
      <div className="sm:w-6/9 sm:flex sm:justify-between grid grid-rows-3 gap-5">
        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={1289} duration={2} /></h1>
          <p className="text-center text-gray-500">Total links</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={34} duration={2} /></h1>
          <p className="text-center text-gray-500">Saved Today</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={476} duration={2} /></h1>
          <p className="text-center text-gray-500">Favorites</p>
        </div>
      </div>
    </main>
  )
}

export default Counts
