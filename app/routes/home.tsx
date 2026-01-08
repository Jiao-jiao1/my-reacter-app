// app/routes/home.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-sky-400">
        React Router 7 + Tailwind
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        恭喜！你已成功搭建现代化的 React 开发环境。
      </p>
      <a 
        href="https://reactrouter.com/docs" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-400 rounded-full font-bold transition">
          查看文档
        </button>
      </a>
    </div>
  );
}