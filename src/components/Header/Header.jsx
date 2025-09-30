import React from "react"
import { Link } from "react-router"
export default function Header() {
  return (
    <div className="fixed z-10 w-full flex justify-between bg-red-400 items-center p-2 shadow-md">
        <div className="flex gap-2">
            <div className="flex items-center justify-center bg-amber-300 rounded-full w-[32px] h-[32px]">
                <span></span>
            </div>
            <span className="text-2xl font-bold">MJPRU Sports</span>
        </div>
        <div className="hidden md:flex gap-8">
            <Link to={"asdf"}>
                <span className="font-bold">Home</span>
            </Link>
            <Link to={"asdf"}>
                <span className="font-bold">Home</span>
            </Link>
            <Link to={"asdf"}>
                <span className="font-bold">Home</span>
            </Link>
            <Link to={"asdf"}>
                <span className="font-bold">Home</span>
            </Link>
        </div>
        <div className=" bg-amber-300 w-8 h-8 md:hidden">
            <span></span>
        </div>
    </div>
  )
}
