import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-30 w-full flex justify-center p-5">
      <div className="flex justify-between w-6/7 gap-4 items-start">
        <img src="/inner/link.png" className="w-20" />
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 text-gray-400">
            <p className="font-extrabold text-black">Product</p>
            <Link href="">Dashboard</Link>
            <Link href="">Collections</Link>
            <Link href="">Favorites</Link>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 text-gray-400">
              <p className="font-extrabold text-black">Support</p>
              <Link href="">Help Center</Link>
              <Link href="">Contact</Link>
              <Link href="">Status</Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
