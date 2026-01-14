const Counts = () => {
  return (
    <main className="flex justify-center mt-20">
      <div className="sm:w-6/9 sm:flex sm:justify-between grid grid-rows-3 gap-5">
        <div>
          <h1 className="text-6xl font-extrabold text-center">1289</h1>
          <p className="text-center text-gray-500">Total links</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center">34</h1>
          <p className="text-center text-gray-500">Saved Today</p>
        </div>

        <div>
          <h1 className="text-6xl font-extrabold text-center">476</h1>
          <p className="text-center text-gray-500">Favorites</p>
        </div>
      </div>
    </main>
  )
}

export default Counts
