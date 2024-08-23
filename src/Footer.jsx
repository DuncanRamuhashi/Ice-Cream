// import React from 'react'

const Footer = () => {
    const year =  new Date().getFullYear();
  return (
    <div className="flex bg-[#351a0e] items-center justify-center py-9 w-full "
    >
            
           
            <footer className=" p-4 text-center">
             <p className='text-gray-200'>&copy; {year} Noluthando, Tshegofatso and Duncan. All rights reserved.</p>
             </footer>
           
   


</div> 
  )
}

export default Footer