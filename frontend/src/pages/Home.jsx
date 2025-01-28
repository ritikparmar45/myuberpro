import React, { useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocatiionSerchPanel from "../components/LocationSearchPanel";

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }
    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding:20
               // opacity:1
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }
        else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding:0
              //  opacity:0
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    }, [panelOpen ])
    return (
        <div className='h-screen relative overflow-hidden'>
            <img className="w-16 absolute left-5 top-5" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"></img>

            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"></img>
            </div>

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5  ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }}
                        className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5 >
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
                            type="text"
                            placeholder="Add a pickup location"></input>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder="Enter your destination"></input>
                    </form>
                </div>
                <div ref={panelRef} className=' opacity-0 bg-red-500 h-0'>
                      <LocatiionSerchPanel/>
                </div>
            </div>

            <div className='fixed w-full z-10 bottom-0 bg-white p-5'>
                <div className='flex w-full bg-red-600 items-center justify-betweeen'>
                    <img className='h-10' src=""></img>
                     <div className='bg-green-500 w-1/2'>
                         <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                         <h5 className='font-medium text-sm'>2 mins away</h5>
                         <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                     </div>
                     <h2 className='text-xl font-semibold'>r193.20</h2>
                </div>

            </div>
        </div>
    )
}
export default Home