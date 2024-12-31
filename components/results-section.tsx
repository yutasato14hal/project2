import { Card } from "@/components/ui/card"

export function ResultsSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-[#1E3A8A] text-3xl font-bold mb-12">実績紹介</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 text-center bg-white border-2 border-[#F26B3C] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">年間成約件数</h3>
          <p className="text-5xl font-bold text-[#F26B3C]">500件以上</p>
        </Card>
        <Card className="p-8 text-center bg-white border-2 border-[#F26B3C] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">顧客満足度</h3>
          <p className="text-5xl font-bold text-[#F26B3C]">98%</p>
        </Card>
        <Card className="p-8 text-center bg-white border-2 border-[#F26B3C] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">返済プラン提案数</h3>
          <p className="text-5xl font-bold text-[#F26B3C]">1000件以上</p>
        </Card>
      </div>

      <h2 className="text-center text-[#1E3A8A] text-3xl font-bold mt-20 mb-12">安心のポイント</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 text-center bg-white border-2 border-[#1E3A8A] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">宅建取引業者免許番号</h3>
          <p className="text-xl text-gray-700">明記あり</p>
        </Card>
        <Card className="p-8 text-center bg-white border-2 border-[#1E3A8A] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">不動産協会</h3>
          <p className="text-xl text-gray-700">加盟</p>
        </Card>
        <Card className="p-8 text-center bg-white border-2 border-[#1E3A8A] shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">プライバシーマーク</h3>
          <p className="text-xl text-gray-700">取得済み</p>
        </Card>
      </div>
    </div>
  )
}

