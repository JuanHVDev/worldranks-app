"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'

export const Status = () =>
{
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [memberStatus, setMemberStatus] = useState(searchParams.get('member') || '');
  const [independentStatus, setIndependentStatus] = useState(searchParams.get('independent') || '');

  useEffect(() =>
  {
    setMemberStatus(searchParams.get('member') ? 'member' : '');
    setIndependentStatus(searchParams.get('independent') ? 'independent' : '');
  }, [searchParams]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>, statusType: string) =>
  {
    const { id, checked } = e.target;
    const newStatus = checked ? id : '';

    const searchParams = new URLSearchParams(window.location.search);

    if (newStatus)
    {
      searchParams.append(statusType, newStatus);
    } else
    {
      searchParams.delete(statusType);
    }

    const sort = searchParams.get('sort');
    const regionsString = searchParams.get('regions');
    const regions = regionsString ? regionsString.split(',').filter(isValidRegion) : [];
    const member = searchParams.get('member');
    const independent = searchParams.get('independent');

    let newRegions = [...regions];
    const index = newRegions.indexOf(id);

    if (index > -1 && !checked)
    {
      newRegions.splice(index, 1);
    } else if (index === -1 && checked && isValidRegion(id))
    {
      newRegions.push(id);
    }

    let params = `?sort=${sort}`;

    if (newRegions.length > 0)
    {
      params += `&regions=${newRegions.join(',')}`;
    }

    if (statusType === 'member' && newStatus)
    {
      params += `&member=${newStatus}`;
    } else if (statusType === 'member' && !newStatus && member)
    {
      params = params.replace(`&member=${member}`, '');
    }

    if (statusType === 'independent' && newStatus)
    {
      params += `&independent=${newStatus}`;
    } else if (statusType === 'independent' && !newStatus && independent)
    {
      params = params.replace(`&independent=${independent}`, '');
    }

    router.push(pathName + params);
  };

  const isValidRegion = (region: string) =>
  {
    return ['americas', 'europe', 'africa', 'asia', 'oceania', 'antarctic'].includes(region);
  };
  return (
    <div>
      <p>Status</p>
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center gap-2 w-full text-primary">
          <input
            type="checkbox"
            name="member"
            id="member"
            checked={memberStatus === 'member' ? true : false}
            className="peer hidden"
            value="member"
            onChange={(e) => handleChange(e, 'member')}
          />
          <label
            htmlFor="member"
            className="before:rounded before:content-[''] before:w-5 before:h-5 before:float-left before:bg-background before:border-secundary before:border-2 before:mr-2 peer-checked:before:border-none peer-checked:before:bg-accent peer-checked:after:content-[''] peer-checked:after:w-[12px] peer-checked:after:h-[6px] peer-checked:after:border-[4px] peer-checked:after:float-left peer-checked:after:ml-[-1.50rem] peer-checked:after:mt-[0.4rem] peer-checked:after:-rotate-[55deg] peer-checked:after:border-t-0 peer-checked:after:border-r-0"
          >
            Member of the United Nations
          </label>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <input
            type="checkbox"
            name="independent"
            id="independent"
            checked={independentStatus === 'independent'}
            className="peer hidden"
            value="independent"
            onChange={(e) => handleChange(e, 'independent')}
          />
          <label htmlFor="independent" className="before:rounded before:content-[''] before:w-5 before:h-5 before:float-left before:bg-background before:border-secundary before:border-2 before:mr-2 peer-checked:before:border-none peer-checked:before:bg-accent peer-checked:after:content-[''] peer-checked:after:w-[12px] peer-checked:after:h-[6px] peer-checked:after:border-[4px] peer-checked:after:float-left peer-checked:after:ml-[-1.50rem] peer-checked:after:mt-[0.4rem] peer-checked:after:-rotate-[55deg] peer-checked:after:border-t-0 peer-checked:after:border-r-0">
            Independent
          </label>
        </div>
      </div>
    </div>
  )
}
