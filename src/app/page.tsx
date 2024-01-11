import { getPaisesAll, paisesbySort } from '@/actions/paisesList'
import { PaisesTable, RegionList, Sort, Status, TopMenu } from '@/components'
import Image from 'next/image'

interface Props
{
  searchParams: { [key: string]: string | string[] | undefined }

}

export default async function Home({ searchParams }: Props)
{
  const regiones = typeof searchParams.regions === undefined ? '' : searchParams.regions
  const sortDirection = typeof searchParams.sort === 'string' ? searchParams.sort : 'population'
  const regionesUpdate = regiones ? (regiones as string).split(',') : []
  const paises = await paisesbySort(sortDirection, regionesUpdate)
  return (
    <main className='bg-background w-screen -top-40 lg:w-[950px] xl:w-[1200px] relative lg:-top-28 lg:px-6 lg:p-6  xl:-top-12 mx-auto rounded-md px-8 p-10 text-secundary sm:flex sm:flex-col'>
      <TopMenu total={paises.length.toString()} />
      <div className='mt-10 lg:grid lg:grid-cols-12 sm:grid sm:grid-rows-12'>
        <div className=' lg:col-span-3 sm:row-span-3'>
          <div className='my-4'>
            <Sort />
          </div>
          <div className='my-4'>
            <RegionList />
          </div>
          <div className='my-4'>
            <Status />
          </div>
        </div>
        <div className='lg:col-span-9 lg:ml-8 row-span-9'>
          <PaisesTable paises={paises} />
        </div>
      </div>

    </main >
  )
}
