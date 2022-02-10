import {Link} from 'react-scroll'
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";

export default function HeaderComponent() {
    return (
        <footer className="border-t border-gray-200 bg-black text-white">
        <div
          className="
            container
            flex flex-col flex-wrap
            px-4
            py-16
            mx-auto
            md:items-center
            lg:items-start
            md:flex-row md:flex-nowrap
            
          "
        >
          <div
            className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left "
          >
            <Link
              className="
                flex
                items-center
                justify-center
                text-4xl
                font-bold
                text-blue-700
                md:justify-start
              "
              spy={true} 
                smooth={true}
              to={'home'}
            >WOXH
            </Link>
          </div>
          <div className="justify-between w-full mt-4 text-center lg:flex">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-200">
                Home
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-200">
                RoadMap
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-200">
                WhitePaper
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-200">
                Team
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center py-10">
            <div className="flex justify-center display-block mb-2">
              <a 
                className='cursor-pointer'
                href='https://t.me/woxhcom'
              >
                <FaTelegramPlane className='text-2xl text-blue-800' />
              </a>
              <a className="ml-3 cursor-pointer" href='https://twitter.com/woxhtoken'>
                <FaTwitter className='text-2xl  text-blue-800'/>
              </a>

              <a className="ml-3 cursor-pointer" href='https://discord.gg/FmwPyuQC'>
                <FaDiscord className='text-2xl  text-blue-800'/>
              </a>
             
            </div>
          <p className="text-gray-500 text-center">
            All rights reserved by @ WOXH TEAM 2022
          </p>
        </div>
      </footer>
    )
}
