import type React from "react"
import { motion } from "framer-motion"

interface AIAdvisorProps {
  suggestions: string[]
}

const AIAdvisor: React.FC<AIAdvisorProps> = ({ suggestions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">AI Password Advisor</h2>
      {suggestions.length > 0 ? (
        <ul className="list-disc list-inside text-sm text-gray-600">
          {suggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {suggestion}
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600">Enter a password to get AI-powered suggestions.</p>
      )}
    </motion.div>
  )
}

export default AIAdvisor

