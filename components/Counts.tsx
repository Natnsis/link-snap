"use client"
import { collectionCount, linkCount } from "@/app/api/count/route";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";

const Counts = () => {
  const { data: link, isLoading: linking } = useQuery({
    queryKey: ["linkCount"],
    queryFn: linkCount
  })

  const { data: collection, isLoading: collecting } = useQuery({
    queryKey: ["collectionCount"],
    queryFn: collectionCount
  })

  return (
    <main className="flex justify-center mt-20">
      <div className="sm:w-6/9 sm:flex sm:justify-between grid grid-rows-3 gap-5">
        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={link ? link : 1204} duration={2} /></h1>
          <p className="text-center text-gray-500">Total Overall links</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center"><CountUp start={0} end={collection ? collection : 34} duration={2} /></h1>
          <p className="text-center text-gray-500">Overall Collections</p>
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
