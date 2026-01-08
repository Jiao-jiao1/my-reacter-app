import type { Config } from "@react-router/dev/config";

export default {
  // React Router 7 会自动检测 Vercel 环境
  // 通常不需要显式设置 preset，除非有特殊需求
  ssr: true,
} satisfies Config;