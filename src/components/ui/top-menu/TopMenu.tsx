import React from 'react'
interface Props
{
  total: string
}
export const TopMenu = ({ total }: Props) =>
{
  return (
    <div className='flex justify-between'>
      <div>
        <p className='text-md'>Found {total} countries</p>
      </div>
      <div className="flex rounded-full w-80 px-2 bg-backgroundSecundary">
        <button type="submit" className="relative p-1 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#6C727F" strokeWidth="2" />
            <path d="M20 20L17 17" stroke="#6C727F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <input
          type="text"
          className="w-full flex bg-transparent placeholder:text-sm pl-1 text-primary outline-0"
          placeholder="Search by Name, Region, Subregion"
        />
      </div>
    </div>
  )
}
