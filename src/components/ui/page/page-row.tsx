export default function PageRow({ text, value }: { text: string, value: string })
{
  return (
    <div className="w-full p-5 border-b border-[#282B30] flex justify-between">
      <p className="text-[#6C727F]">{text}</p>
      <p>{value}</p>
    </div>
  )
}