import React from 'react'

export const Hero = () => {
  return (
    <div className='flex justify-center w-[100vw] mx-auto'>
        <div className='bg-blue-400 my-5 w-[80vw] md:flex flex-row rounded-[25px]'>
            <div className='md:w-[50%]'>
                <img src="./assets/images/hero-image.jpg" alt="" className='h-[100%] p-2 rounded-[25px]'/>
            </div>
            <div className='md:w-[50%] w-[100%]'>
                <div className='flex justify-center p-[10px]'>
                    <div className='border-b-2 border-l-2 border-red-700 p-1'>
                        <h3 >Legends of Victory: Battle Royale Cup.</h3>
                        <h4>Compete for glory. Only one can win.</h4>
                    </div>
                    
                </div>
                <div className='md:flex justify-center p-[10px] '>
                    <ul className='border-l-2 border-b-2 border-red-700 p-1'>
                        <li>August 10, 2025 at 6PM SAST.</li>
                        <li>Streamed live on Twitch.</li>
                        <li>R50,000 Prize Pool.</li>
                        <li>Round Robin, Double Elimination.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
