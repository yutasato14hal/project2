import { Card } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function StrengthsSection() {
  const strengths = [
    {
      title: "特別審査基準",
      description: "年収以外の判断基準を重視、将来性を考慮した審査、柔軟な返済プラン",
    },
    {
      title: "豊富な物件情報",
      description: "優良物件を多数確保、築浅物件も多数、駅近物件が充実",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-[#1E3A8A] text-3xl font-bold mb-12">独自の強み</h2>
      <div className="space-y-8">
        {strengths.map((item, index) => (
          <Card 
            key={index} 
            className="p-8 flex items-start gap-6 border-2 border-[#1E3A8A] shadow-lg hover:shadow-xl transition-shadow bg-white"
          >
            <div className="bg-[#F26B3C] p-4 rounded-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

