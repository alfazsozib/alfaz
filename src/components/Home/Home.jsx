import React, { useState } from 'react'
import BG from '../Global/BG'
import Navbar from '../Global/Navbar'
import Facebook from "../assets/icons/Facebook.png"
import Github from "../assets/icons/Github.png"
import Linkedin from "../assets/icons/Linkedin.png"
import Gmail from "../assets/icons/Gmail.png"
import paginationIcon from "../assets/icons/Polygon 1.png"
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  const pageIndex = [
    '/',
    '/mastery',
    '/projects',
    '/testimonial',
    '/connect'
  ]

  const [pathName, setPathName] = useState(location.pathname)

  return (
    <>
    <div className=''>
      {/* <Navbar /> */}
      <BG />
      
    </div>

      <div>
        <div className='flex justify-center items-center'>
          <div className='absolute top-[20%] '>
            <div className='title'>
              <h1 className='text-6xl bg-gradient-to-r from-purple-800 to-blue-900 text-transparent bg-clip-text  relative font-urbanistLight font-black text-center '>MERN STACK <br /> & <br />
                PYTHON DEVELOPER</h1>

                <h1 className='text-6xl absolute top-1 font-urbanistLight font-black text-center  text-white'>MERN STACK <br /> & <br />
              PYTHON DEVELOPER</h1>
            </div>


            <div className='text-center absolute my-6'>
                <p className='text-white font-urbanistLight font-light text-xl'>I merge design and functionality to create captivating digital experiences with creativity and finesse.</p>
                <button className='mt-4 font-urbanistLight font-normal text-white px-12 py-2 bg-gradient-to-r from-[#6B73FF] to-[#000DFF] rounded-lg tracking-widest'>LET'S COLLAB</button>
            </div>          
          </div>

          <div className='icon-box absolute bottom-6'>
            <div className='icons flex gap-4 items-center'>
                <img width={30} src={Facebook} alt="Facebook" />
                <img width={30} src={Linkedin} alt="Linkedin" />
                <img width={30} src={Gmail} alt="Gmail" />
                <img width={30} src={Github} alt="Github" />
            </div>
          </div>

          <div className='icon-box absolute right-6 bottom-6'>
            <div className='icons flex flex-col gap-4 items-center'>
                {pageIndex.map((path, index)=>
                path==pathName?<img width={25} src={paginationIcon} alt="paginationIcon" />:<div className='bg-white w-2 h-2'></div>
                )}
            </div>
          </div>
        </div>
      </div>
      
</>
  )
}

export default Home