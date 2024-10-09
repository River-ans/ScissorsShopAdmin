/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // SVG 파일을 대상으로 하는 규칙
      use: ['@svgr/webpack'], // svgr을 사용하여 React 컴포넌트로 변환
    });

    return config;
  },
};

export default nextConfig;
