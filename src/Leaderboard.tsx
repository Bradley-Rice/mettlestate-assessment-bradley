import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LeaderBoard = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
  return (
    <div className="flex justify-center items-center p-3.5">
        <div className='border rounded-[25px] overflow-hidden'>
            <table id='leaderBoard' className="shadow-2xl border-seperate font-[Poppins] w-6/12 ">
                <thead className="text-white rounded-t-lg bg-blue-600">
                <tr>
                    <th className="p-3 ">Position.</th>
                    <th className="p-3 ">Gamer Tag.</th>
                    <th className="p-3 ">Points</th>
                </tr>
                </thead>
                <tbody className="text-cyan-900 text-center">
                    {
                    data.map((user, index) => { 
                        return <tr key={index} id={ String(index) } className={ index <= 2 ? 'bg-yellow-300 cursor-pointer duration-300 border-t-1' : 'bg-red-500 border-t-1 cursor-pointer duration-300'}>
                            <td className="py-3 px-6 text-black">{user.id}</td> {/* Unsure where these errors are coming from -> stack overflow says that it could mean the value never gets evaluated.. although they do... */}
                            <td className="py-3 px-6 text-black">{user.username}</td>
                            <td className="py-3 px-6 text-black">{1100 - user.id * 100}</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
            
    </div>

  )
}

export default LeaderBoard