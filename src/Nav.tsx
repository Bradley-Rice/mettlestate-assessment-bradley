import { useState } from "react";
import Modal from "./Modal";
// Navbar component.

export const NavBar = () => {
    const [open, setOpen] = useState(false)
  return (
    <header className="bg-red-950">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div className="py-3">
                <img className="w-16" src="./assets/images/nav-logo.png" alt="..." />
            </div>
            <div className="md:static absolute bg-red-950 md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <button className="bg-red-800 py-2 text-blue rounded-full px-5 hover:bg-red-400 hover:text-white" onClick={()=>setOpen(true)}>FAQ's</button>
            </div>
        </nav>
        <Modal open={open} onClose={()=> setOpen(false)}>
                <div className='absolute w-[400px] bg-white rounded-[6px] top-[50%] left-[50%] translate-[-50%]'>
                    <div className='p-3'>
                        <div>
                            <h1 className='text-center mb-2.5'>Frequently Asked Questions.</h1>
                        </div>
                        <div className='flex '>
                            <div className='border-r-1 w-[50%]'>
                                <p className='px-2 border-b-1'>Where can I watch the event? <br></br> The event will be streamed live on Twitch.</p>
                                <p className='px-2 border-b-1'>How can I register for the event? <br></br> You may register for the event <a>HERE.</a></p>
                                <p className='px-2'>When is the event? <br></br> The event will be on the 10th of August at 6PM SAST. </p>
                            </div>
                            <div className='w-[50%]'>
                                <img src="/assets/images/nav-logo.png" alt="..." />
                                <img src="/assets/images/hero-image.jpg" alt="..." className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <button
                    onClick={onclose=()=> setOpen(false)}
                    className='absolute top-2 right-2 p-1 rounded-lg
                    text-gray-400 bg-white hover:bg-gray-50 
                    hover:text-gray-600'>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </Modal >
    </header>
    
  )
}

export default NavBar;