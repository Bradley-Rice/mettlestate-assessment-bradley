import { useState } from "react";
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
            <div className="flex items-center gap-6">
                <button className="bg-red-800 text-blue px-5 py-2 rounded-full hover:bg-red-400 hover:text-white">Register</button>
                <i className="fa-solid fa-bars text-3xl cursor-pointer md:invisible"></i>
            </div>
        </nav>
    </header>
    
  )
}

export default NavBar;