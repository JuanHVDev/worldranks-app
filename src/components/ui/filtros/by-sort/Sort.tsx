"use client"

import { paisesbySort } from "@/actions/paisesList"
import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"


export const Sort = () =>
{

  const router = useRouter()
  const [sortBy, setSortBy] = useState<string>('')
  const pathname = usePathname()

  useEffect(() =>
  {
    if (!sortBy)
    {
      setSortBy('population')
      const newPathName = new URLSearchParams([["sort", sortBy]])
      router.push(pathname + '?' + newPathName.toString() + 'population')
    } else
    {
      const newPathName = new URLSearchParams([["sort", sortBy]])
      router.push(pathname + '?' + newPathName.toString())
    }
  }, [sortBy])

  const handleChange = (e: { value: string }) =>
  {
    setSortBy(e.value)
  }

  return (
    <div>
      <p className='my-4'>Sort by</p>
      <select name="sort" id="sort" className='rounded-md border-2 p-3 bg-background w-full text-primary' onChange={(e) => { handleChange(e.target) }}>
        <option value="population">Population</option>
        <option value="name">Name</option>
        <option value="area">Area (km2)</option>
      </select>
    </div>
  )
}
