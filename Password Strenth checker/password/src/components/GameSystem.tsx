import type React from "react"
import { motion } from "framer-motion"

interface GameSystemProps {
  points: number
  level: number
}

const GameSystem: React.FC<GameSystemProps> = ({ points, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Password Security Game</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Points: {points}</p>
          <p className="text-sm text-gray-600">Level: {level}</p>
        </div>
        <motion.div
          className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-white font-bold text-xl">{level}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GameSystem

