
const LandingCards = () => {
  return (
    <div className="flex justify-center" id="features">
      <div className="sm:grid sm:grid-cols-3 sm:gap-10 w-[1000px] grid gird-rows-3 gap-5">
        <div className="h-[60vh] bg-gray-100 rounded-lg">
          <div className="h-6/7">
          </div>
          <p className="text-center text-sm text-gray-600">Preview</p>
          <h1 className="text-center font-extrabold text-lg">Auto-preview</h1>
        </div>

        <div className="h-[60vh] bg-gray-100 rounded-lg">
          <div className="h-6/7">
          </div>
          <p className="text-center text-sm text-gray-600">Organize</p>
          <h1 className="text-center font-extrabold text-lg">Easy folders</h1>
        </div>

        <div className="h-[60vh] bg-gray-100 rounded-lg">
          <div className="h-6/7">
          </div>
          <p className="text-center text-sm text-gray-600">Share</p>
          <h1 className="text-center font-extrabold text-lg">Plublic cards</h1>
        </div>
      </div>
    </div>
  )
}

export default LandingCards
