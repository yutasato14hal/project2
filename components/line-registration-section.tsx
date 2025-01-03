"use client";
import { Card } from '@/components/ui/card';
import '../app/shimmer.css';
import { Button } from './ui/button';

export function LineRegistrationSection() {
  const benefits = [
    {
      title: '最速の物件情報',
      description: '物件情報を最速でご紹介',
      icon: '⚡',
    },
    {
      title: '特別価格物件',
      description: '特別価格物件をいち早く確認',
      icon: '💎',
    },
    {
      title: '優先予約',
      description: '内見予約が優先的に可能',
      icon: '🎯',
    },
    {
      title: '無料診断',
      description: '住宅ローン診断が無料',
      icon: '✨',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8">
          <h2 className="text-center text-3xl font-bold mb-2">LINE登録特典</h2>
          <p className="text-center text-xl mb-8 text-gray-600">
            今すぐLINE登録で
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

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
              className="shimmer-button text-white px-8 py-6 text-lg rounded-full"
            >
              LINE友だち追加で特典をGET
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
