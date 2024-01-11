import React from 'react'

export const Status = () =>
{
  return (
    <div>
      <p>Status</p>
      <div className='flex flex-col gap-1 mt-2'>
        <div className='flex items-center gap-2 w-full text-primary'>
          <input type="checkbox" name="member" id="member" className='peer hidden' />
          <label htmlFor="member" className="before:rounded before:content-[''] before:w-5 before:h-5 before:float-left before:bg-background before:border-secundary before:border-2 before:mr-2 peer-checked:before:border-none peer-checked:before:bg-accent peer-checked:after:content-[''] peer-checked:after:w-[12px] peer-checked:after:h-[6px] peer-checked:after:border-[4px] peer-checked:after:float-left peer-checked:after:ml-[-1.50rem] peer-checked:after:mt-[0.4rem] peer-checked:after:-rotate-[55deg] peer-checked:after:border-t-0 peer-checked:after:border-r-0">Member of the United Nations</label>
        </div>
        <div className='flex items-center gap-2 text-primary'>
          <input type="checkbox" name="independent" id="independent" className='peer hidden' />
          <label htmlFor="independent" className="before:rounded before:content-[''] before:w-5 before:h-5 before:float-left before:bg-background before:border-secundary before:border-2 before:mr-2 peer-checked:before:border-none peer-checked:before:bg-accent peer-checked:after:content-[''] peer-checked:after:w-[12px] peer-checked:after:h-[6px] peer-checked:after:border-[4px] peer-checked:after:float-left peer-checked:after:ml-[-1.50rem] peer-checked:after:mt-[0.4rem] peer-checked:after:-rotate-[55deg] peer-checked:after:border-t-0 peer-checked:after:border-r-0">
            Independent
          </label>
        </div>
      </div>
    </div>
  )
}
