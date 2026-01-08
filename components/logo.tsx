import Image from "next/image"

export default function Logo() {
  return (
    <div className="relative h-10">
      <Image src="/novaLogo.png" alt="PROPV - Tecnologia e Automação" width={160} height={40} priority className="h-full w-auto" />
    </div>
  )
}
