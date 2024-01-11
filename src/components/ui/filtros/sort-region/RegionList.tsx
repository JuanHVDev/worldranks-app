"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce'
export const RegionList = () =>
{
  // Get the current pathname and search params.
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Create a state variable to store our data in. We start with an empty array
  const [regiones, setRegiones] = useState<string[]>([])
  useEffect(() =>
  {
    // console.log(regiones)
    if (regiones.length > 0)
    {
      const params = searchParams.get('sort')
      const newPathName = updateURLSearchParams()
      router.replace('?sort=' + params + '&' + newPathName)
    }
  }, [regiones])

  const updateURLSearchParams = () =>
  {
    const newURLSearchParams = new URLSearchParams([["regions", regiones.join(',')]])
    newURLSearchParams.set("regions", regiones.join(','))
    return newURLSearchParams.toString()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (regiones.includes(e.target.value))
    {
      setRegiones((state) => [...state.filter((r) => r !== e.target.value)])
    } else
    {
      setRegiones((state) => [...state, e.target.value])
    }
  }


  return (
    <>
      <p className='my-4'>Región</p>
      <div className='flex w-48 flex-wrap'>
        <div>
          <input type="checkbox" name="americas" id="americas" className='hidden peer' value={'americas'} onChange={(e) => handleChange(e)} />
          <label htmlFor='americas' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Americas</label>
        </div>
        <div>
          <input type="checkbox" name="antarctic" id="antarctic" className='hidden peer' value='antarctic' onChange={(e) => handleChange(e)} />
          <label htmlFor='antarctic' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Antarctic</label>
        </div>
        <div>
          <input type="checkbox" name="africa" id="africa" className='hidden peer' value='africa' onChange={(e) => handleChange(e)} />
          <label htmlFor='africa' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Africa</label>
        </div>
        <div>
          <input type="checkbox" name="asia" id="asia" className='hidden peer' value='asia' onChange={(e) => handleChange(e)} />
          <label htmlFor='asia' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Asia</label>
        </div>
        <div>
          <input type="checkbox" name="europe" id="europe" className='hidden peer' value={'europe'} onChange={(e) => handleChange(e)} />
          <label htmlFor='europe' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Europe</label>
        </div>
        <div>
          <input type="checkbox" name="oceania" id="oceania" className='hidden peer' value={'oceania'} onChange={(e) => handleChange(e)} />
          <label htmlFor='oceania' className='block peer-checked:text-primary peer-checked:bg-backgroundSecundary w-fit rounded-lg p-2'>Oceania</label>
        </div>
      </div>
    </>
  )
}
