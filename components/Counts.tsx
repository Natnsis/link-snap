"use client"
import { collectionCount, linkCount } from "@/app/api/count/route";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";

const Counts = () => {
  const { data: link, isLoading: linking } = useQuery({
    queryKey: ["linkCount"],
    queryFn: linkCount
  })

  return (
    <main className="flex justify-center mt-20">
      <div className="sm:w-6/9 sm:flex sm:justify-between grid grid-rows-3 gap-5">
        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={34} duration={2} /></h1>
          <p className="text-center text-gray-500">UnWatched</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={476} duration={2} /></h1>
          <p className="text-center text-gray-500">Watched</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={46} duration={2} /></h1>
          <p className="text-center text-gray-500">Watching</p>
        </div>
      </div>
    </main>
  )
}

export default Counts
