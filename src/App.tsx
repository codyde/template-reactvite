import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#1F1633] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#452650] to-[#362d59] rounded-2xl shadow-2xl p-10 max-w-2xl w-full border border-[#6A5FC1]/20">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="text-5xl font-bold bg-gradient-to-r from-[#E1567C] via-[#F4834F] to-[#F2B712] bg-clip-text text-transparent">
            sentry.new
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-200">
            <img src={viteLogo} className="w-16 h-16 opacity-90 hover:opacity-100" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-200">
            <img src={reactLogo} className="w-16 h-16 opacity-90 hover:opacity-100" alt="React logo" />
          </a>
        </div>

        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          React + Vite + Tailwind CSS
        </h1>

        <p className="text-center text-[#F4834F] mb-8 text-sm">
          A modern starter template powered by sentry.new
        </p>

        <div className="bg-[#1F1633] rounded-xl p-6 mb-6 border border-[#6A5FC1]/30">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-gradient-to-r from-[#E1567C] to-[#F4834F] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#E1567C]/90 hover:to-[#F4834F]/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E1567C]/20"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-300 text-center text-sm">
            Edit <code className="bg-[#6A5FC1]/20 px-2 py-1 rounded text-[#F2B712] font-mono border border-[#6A5FC1]/30">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            Built with React 19, Vite 7, TypeScript, and Tailwind CSS v4
          </p>
          <p className="text-gray-500 text-xs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
