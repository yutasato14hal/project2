import { Card } from "@/components/ui/card"

export function SupportSection() {
  const supportItems = [
    {
      title: "専任担当者による個別対応",
      icon: "👤",
    },
    {
      title: "ローンアドバイス",
      icon: "💰",
    },
    {
      title: "諸費用の説明",
      icon: "📋",
    },
    {
      title: "物件見学のアテンド",
      icon: "🏠",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-white text-2xl mb-12">充実のサポート</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportItems.map((item, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold">{item.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  )
}

