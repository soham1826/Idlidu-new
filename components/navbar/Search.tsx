'use client'

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Categories from './Categories'
import CategoryBox from '../CategoryBox'
// Remember to import words or whatever you're using to store all the words the user can search for

const Search = () => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        setActiveSearch(Categories.filter((w: string | any[]) => w.includes(e.target.value)).slice(0,8))
    }

  return (
    <form className='w-[500px] relative'>
        <div className="relative">
            <input type="search" placeholder='Find Artist' className='w-full p-4 rounded-full bg-white' onChange={(e) => handleSearch(e)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-blue rounded-full'>
                <AiOutlineSearch />
            </button>
        </div>

        {
            activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        activeSearch.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>
            )
        }


        
    </form>
  )
}

export default Search