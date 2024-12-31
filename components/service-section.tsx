import { Card } from "@/components/ui/card"

export function ServiceSection() {
  const services = [
    {
      step: "STEP1",
      title: "きづく",
      items: [
        "オンライン性格診断・PGS分析",
        "現状認識の向上",
        "組織分析レポートの共有",
      ],
    },
    {
      step: "STEP2",
      title: "まなぶ",
      items: [
        "コンテンツの配信",
        "学習記録",
        "学習・学習セミナー",
      ],
    },
    {
      step: "STEP3",
      title: "つながる",
      items: [
        "専門家への書き込み相談",
        "交流機会の創出",
        "オンライン・専門家相談会",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-white text-2xl mb-12">サービス内容</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-white p-6">
            <div className="text-center mb-4">
              <div className="text-[#F26B3C] mb-2">{service.step}</div>
              <h3 className="text-xl font-bold text-[#F26B3C]">{service.title}</h3>
            </div>
            <ul className="space-y-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <span className="bg-[#F26B3C] text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                    {itemIndex + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

