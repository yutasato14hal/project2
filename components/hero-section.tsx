import Image from 'next/image';
import heroImage from '@/public/Image/kenjya-fv-pc.jpg';
export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <Image
        src={heroImage}
        alt="モダンな住宅の外観"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />{' '}
      {/* Increased overlay opacity for better text visibility */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          年収300万円台でもマイホームが持てる！
          <br />
          独自の審査基準で夢のマイホームを実現
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
          20代・30代の方限定！
          <br />
          特別審査枠でご案内可能な物件あり
        </p>
      </div>
    </div>
  );
}
