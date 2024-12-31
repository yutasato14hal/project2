import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CoverageSection() {
  const areas = [
    {
      title: "共同開発",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "新卒採用等",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "中途採用",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "経営",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-white text-2xl mb-4">FEMCLEがカバーしている領域</h2>
      <p className="text-center text-white mb-12">FEMCLEによって、全ての女性社員の成長課題を包括的にサポートします。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <Card key={index} className="bg-white p-6 flex flex-col items-center">
            <Image
              src={area.image}
              alt=""
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-center">{area.title}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

