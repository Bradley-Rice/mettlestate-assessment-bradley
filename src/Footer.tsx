import React from 'react'

const Footer = () => {
    return (
		<div>
			<footer className='w-[100vw] bottom-0 bg-white p-1'>
				<div className='w-[100%] flex'>
					<div className='w-3/12'>
						<img src="/assets/images/mettlestate-footer-logo.webp" alt="" className='w-25 rounded-[15px] p-1.5'/>
					</div>
					<div className='w-6/12 content-center'>
						<h4 className='flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
					</div>
					<div className='w-3/12 flex justify-center items-center'>
						<ul className='flex justify-center items-center'>
							<div className='p-2.5'>
								<li>
									<a href=""><i className="fa-brands fa-instagram"></i></a>
								</li>
								<li>
									<a href=""><i className="fa-brands fa-facebook"></i></a>
								</li>
							</div>
							<div>
								<li>
									<a href=""><i className="fa-brands fa-twitch"></i></a>
								</li>
								<li>
									<a href=""><i className="fa-brands fa-discord"></i></a>
								</li>
							</div>
							
						</ul>
					</div>
				</div>
      	    </footer>
        </div>
    )
}

export default Footer