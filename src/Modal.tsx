import React from 'react'

export default function Modal({ open , onClose , children} : {open:any , onClose:any , children:any}){
    return (
        // BACKDROP.
        <div 
        onClick={onClose} 
        className={`
        fixed inset-0 flex justify-center items-center 
        transition-colors
    ${open ? "visible bg-black/20" : "invisible"}
    `}
    >
        {/* MODAL */}
            <div
            onClick={e => e.stopPropagation() } 
            className={`
                bg-white rounded-xl shadow p-2 transition-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
                >                
                {children}
            </div>
            
        </div>
    )
}