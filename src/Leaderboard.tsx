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
            <table id='leaderBoard' className="shadow-2xl font-[Poppins] rounded-[15px] w-6/12 bg-red-600">
                <thead className="text-white">
                <tr>
                    <th className="p-3 ">Position.</th>
                    <th className="p-3 ">Gamer Tag.</th>
                    <th className="p-3 ">Points</th>
                </tr>
                </thead>
                <tbody className="text-cyan-900 text-center">
                    {
                    data.map((user, index) => { 
                        return <tr key={index} className=" cursor-pointer duration-300">
                            <td className="py-3 px-6 text-black">{user.id}</td>
                            <td className="py-3 px-6 text-black">{user.username}</td>
                            <td className="py-3 px-6 text-black">{1100 - user.id * 100}</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
    </div>

  )
}

export default LeaderBoard