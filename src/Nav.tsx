// Navbar component.

export const NavBar = () => {
  return (
    <header className="bg-red-950">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div className="py-3">
                <img className="w-16" src="./assets/images/nav-logo.png" alt="..." />
            </div>
            <div className="md:static absolute bg-red-950 md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="">Home</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="">About</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="">Register</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-green-500">Register</button>
                <i className="fa-solid fa-bars text-3xl cursor-pointer md:invisible"></i>
            </div>
        </nav>
    </header>
    
  )
}

export default NavBar;