import { HeroSection } from "@/components/hero-section"
import { RecommendedSection } from "@/components/recommended-section"
import { StrengthsSection } from "@/components/strengths-section"
import { SupportSection } from "@/components/support-section"
import { ResultsSection } from "@/components/results-section"
import { LineRegistrationSection } from "@/components/line-registration-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="bg-[#F26B3C]">
        <RecommendedSection />
      </div>
      <div className="bg-white">
        <StrengthsSection />
      </div>
      <div className="bg-[#F26B3C]">
        <SupportSection />
      </div>
      <div className="bg-white">
        <ResultsSection />
      </div>
      <div className="bg-[#F26B3C]">
        <LineRegistrationSection />
      </div>
      
    </main>
  )
}

