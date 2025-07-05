import React, { useContext } from 'react'
import assets from '../assets/assets.js'
import { imagesDummyData } from '../assets/assets.js'
import { AuthContext } from '../../context/AuthContext.jsx'

const RightSidebar = ({ selectedUser }) => {

    const {logout} = useContext(AuthContext);

    return selectedUser && (
        <div className={`bg-[#8185B2]/10 text-white w-full h-full relative overflow-y-auto ${selectedUser ? "max-md:hidden" : ""}`}>
            <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light">
                <img
                    src={selectedUser?.profilePic || assets.avatar_icon}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-none"
                />
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-xl font-semibold">{selectedUser?.fullName}</span>
                </div>
                <p className="text-sm text-gray-300 text-center mt-2">{selectedUser?.bio || "No bio available."}</p>
            </div>

            <hr className='border-[#ffffff50] my-4' />

            <div className="px-5 text-xs">
                <p>Media</p>
                <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
                    {imagesDummyData.map((url, index) => (
                        <div key={index} onClick={() => window.open(url)} className='cursor-pointer rounded'>
                            <img src={url} alt="" className='h-full rounded-md' />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={()=> logout()}  className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer'>
                Logout
            </button>
        </div>
    )
}

export default RightSidebar