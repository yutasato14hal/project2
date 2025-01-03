import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// フォント設定
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// メタデータ設定
export const metadata: Metadata = {
  title:
    '【無料診断】年収300万台でもマイホームが買える! | 住宅ローンシミュレーション 独自の審査基準で夢のマイホームを実現',
  description:
    '年収300-400万円世帯向けマイホーム購入シミュレーションと物件紹介。頭金・借入可能額を簡単診断。LINE無料相談で住宅ローンのプロが個別アドバイス。',
  keywords:
    '住宅ローン, マイホーム購入, 頭金, 住宅ローン 審査, マイホーム 年収, 住宅ローン シミュレーション, 年収300万 マイホーム, 共働き 住宅ローン, 頭金なし 住宅ローン',
  openGraph: {
    title:
      '【無料診断】年収300万台でもマイホームが買える! | 住宅ローンシミュレーション',
    description:
      '年収300-400万円世帯向けマイホーム購入シミュレーションと物件紹介。LINE無料相談で住宅ローンのプロが個別アドバイス。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '【無料診断】年収300万台でもマイホームが買える! | 住宅ローンシミュレーション',
    description:
      '年収300-400万円世帯向けマイホーム購入シミュレーションと物件紹介。LINE無料相談で住宅ローンのプロが個別アドバイス。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
