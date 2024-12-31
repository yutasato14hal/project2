import { Card } from "@/components/ui/card"
import Image from "next/image"

export function RecommendedSection() {
  const recommendations = [
    {
      title: "年収が少なくて諦めていた方",
      image: "/Image/lowPaid.png",
      imageSize: { width: 150, height: 150 },
    },
    {
      title: "他社で審査に落ちた経験がある方",
      image: "/Image/rejected.png",
      imageSize: { width: 150, height: 150 },
    },
    {
      title: "頭金が少ない方",
      image: "/Image/lowDownPayment.png",
      imageSize: { width: 150, height: 150 },
    },
    {
      title: "安定性を重視したい方",
      image: "/Image/stability.png",
      imageSize: { width: 150, height: 150 },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-white text-3xl font-bold mb-12">こんな方にオススメ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item, index) => (
          <Card key={index} className="bg-white p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border-2 border-white">
            <div className="mb-6 relative w-[150px] h-[150px]">
              <Image
                src={item.image}
                alt={item.title}
                width={item.imageSize.width}
                height={item.imageSize.height}
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-lg font-medium text-gray-800">{item.title}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

