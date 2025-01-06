// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/housing-loan-advice', // ベースパスを設定
  output: 'export', // 静的エクスポートを使用
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
