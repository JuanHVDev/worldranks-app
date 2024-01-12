"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const Sort = () =>
{
  const router = useRouter()
  const [sortBy, setSortBy] = useState<string>('')
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() =>
  {
    const params = searchParams.get('regions')
    if (!sortBy)
    {
      setSortBy('population')
      const newPathName = new URLSearchParams([["sort", sortBy]])
      router.push(pathname + '?' + newPathName.toString() + 'population')
    }
    const newPathName = updateURLSearchParams()
    if (params)
    {
      router.replace(pathname + '?regions=' + params + '&' + newPathName)
    } else
    {
      router.replace(pathname + '?' + newPathName)
    }


    // if (!sortBy)
    // {
    //   setSortBy('population')

    //   const newPathName = new URLSearchParams([["sort", sortBy]])
    //   router.push(pathname + '?' + newPathName.toString() + 'population')
    // } else
    // {
    //   const newPathName = new URLSearchParams([["sort", sortBy]])
    //   router.push(pathname + '?' + newPathName.toString())
    // }
  }, [sortBy, router,])
  const updateURLSearchParams = () =>
  {
    const newURLSearchParams = new URLSearchParams([["sort", sortBy]])
    newURLSearchParams.set("sort", sortBy)
    return newURLSearchParams.toString()
  }

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
