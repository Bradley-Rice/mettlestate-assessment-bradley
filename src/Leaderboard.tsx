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
    <div className="flex justify-center items-center">
            <table className="shadow-2xl font-[Poppins] border-yellow-300 w-6/12">
                <thead className="text-white">
                    <tr>
                        <th className="py-3 bg-cyan-800">Position.</th>
                        <th className="py-3 bg-cyan-800">Gamer Tag.</th>
                        <th className="py-3 bg-cyan-800">Points</th>
                    </tr>
                </thead>
                <tbody className="text-cyan-900 text-center">
                    {
                        data.map((user, index) => { 
                            return <tr key={index} className="bg-cyan-200 cursor-pointer duration-300">
                                <td className="py-3 px-6">{user.id}</td>
                                <td className="py-3 px-6">{user.username}</td>
                                <td>{1100 - user.id * 100}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

  )
}

export default LeaderBoard