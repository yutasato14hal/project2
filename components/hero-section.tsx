"use client";
import Image from 'next/image';
import heroImage from '@/public/images/kenjya-fv-pc.jpg';
import { Button } from './ui/button';

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
      <div className="absolute inset-0 bg-black/50" /> {/* Increased overlay opacity for better text visibility */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          いえまる不動産なら年収300万円でもマイホームが持てる！
          <br/>
          独自の審査基準で夢のマイホームを実現
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-white drop-shadow-lg">
          20代・30代の方限定！
          <br />
          特別審査枠でご案内可能な物件あり
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          公式LINEで住宅ローン、物件の相談し放題
        </h2>
        <div className="flex justify-center">
          {/* ボタンをリンク化 */}
          <Button
            onClick={() =>
              window.open(
                'https://lin.ee/OKAREy3',
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="shimmer-button text-white px-20 py-6 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-full font-bold"
          >
            公式LINEはこちら
          </Button>
        </div>
      </div>
    </div>
  );
}
