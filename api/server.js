import { createRequestHandler } from "@react-router/node";

// 导入构建后的服务器入口
const serverBuild = await import("../build/server/index.js");

export default createRequestHandler({
  build: serverBuild,
  mode: process.env.NODE_ENV,
});
