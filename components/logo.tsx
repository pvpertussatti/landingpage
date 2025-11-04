import Image from "next/image"

export default function Logo() {
  return (
    <div className="w-8 h-8">
      <Image src="/logo.png" alt="PROPV" width={32} height={32} priority />
    </div>
  )
}
