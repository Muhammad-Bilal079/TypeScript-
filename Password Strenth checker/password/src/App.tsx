import type React from "react"
import { motion } from "framer-motion"
import PasswordInput from "./components/PasswordInput"
import PasswordStrength from "./components/PasswordStrength"
import AIAdvisor from "./components/AIAdvisor"
import BreachChecker from "./components/BreachChecker"
import GameSystem from "./components/GameSystem"
import PhishingDetector from "./components/PhishingDetector"
import { usePasswordStore } from "./store"

const App: React.FC = () => {
  const { password, strength, suggestions, breached, points, level } = usePasswordStore()

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Password Security Analyzer</h1>
          <PasswordInput />
          <PasswordStrength strength={strength} />
          <AIAdvisor suggestions={suggestions} />
          <BreachChecker breached={breached} />
          <GameSystem points={points} level={level} />
          <PhishingDetector password={password} />
        </motion.div>
      </div>
    </div>
  )
}

export default App

