export function UsageFlowSection() {
  const steps = [
    "お問い合わせ",
    "ご要望ヒアリング/プラン提示・ご支給",
    "ご契約",
    "導入手順",
    "ご利用開始",
    "導入支援",
  ]

  return (
    <div>
      <h2 className="text-center text-[#1E3A8A] text-2xl mb-12">ご利用の流れ</h2>
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mb-2">
              STEP
              <br />
              {index + 1}
            </div>
            <div className="text-center text-sm max-w-[100px]">{step}</div>
            {index < steps.length - 1 && (
              <div className="absolute h-0.5 bg-[#1E3A8A] w-full" style={{ left: "calc(50% + 2rem)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

