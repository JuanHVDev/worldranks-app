"use client"
import { Paises } from "@/interfaces/paises"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Props
{
  pais: Paises
}

export const PaisesItem = ({ pais }: Props) =>
{
  const router = useRouter()
  return (
    <tr className="text-primary cursor-pointer hover:opacity-50 active:opacity-100" key={pais.name} onClick={() => router.push(`/country/${pais.name.toLowerCase()}`)} >
      <td className="whitespace-nowrap lg:px-6 lg:py-4">
        <Image src={pais.flag} alt='flag' width={450} height={450} className='w-40' />
      </td>
      <td className="whitespace-nowrap lg:px-6 lg:py-4">
        {pais.name}
      </td>
      <td className="whitespace-nowrap lg:px-6 lg:py-4">
        {pais.population}
      </td>
      <td className="whitespace-nowrap lg:px-6 lg:py-4">
        {pais.area}
      </td>
      <td className="whitespace-nowrap lg:px-6 lg:py-4">
        {pais.region}
      </td>
    </tr>
  )
}
