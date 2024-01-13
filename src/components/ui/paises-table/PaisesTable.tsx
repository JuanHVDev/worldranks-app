import { Paises } from '@/interfaces/paises'
import Image from 'next/image'
import React from 'react'
import { PaisesItem } from './PaisesItem';
interface Props
{
  paises: Paises[]
}
export const PaisesTable = ({ paises }: Props) =>
{
  return (
    <div className="flex flex-col">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="lg:px-6 lg:py-4">Flag</th>
                  <th scope="col" className="lg:px-6 lg:py-4">Name</th>
                  <th scope="col" className="lg:px-6 lg:py-4">Population</th>
                  <th scope="col" className="lg:px-6 lg:py-4">Area (km2)</th>
                  <th scope="col" className="lg:px-6 lg:py-4">Region</th>
                </tr>
              </thead>
              <tbody>
                {
                  paises.map(pais =>
                  {
                    return (

                      <PaisesItem pais={pais} key={pais.population * pais.area} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
