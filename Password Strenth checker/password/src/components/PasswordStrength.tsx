import type React from "react"
import { motion } from "framer-motion"

interface PasswordStrengthProps {
  strength: number
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 0:
        return "bg-red-500"
      case 1:
        return "bg-orange-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  const getStrengthText = (strength: number) => {
    switch (strength) {
      case 0:
        return "Very Weak"
      case 1:
        return "Weak"
      case 2:
        return "Fair"
      case 3:
        return "Strong"
      case 4:
        return "Very Strong"
      default:
        return "Enter a password"
    }
  }

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-700 mb-2">Password Strength</p>
      <motion.div
        className="h-2 rounded-full bg-gray-300"
        initial={{ width: 0 }}
        animate={{ width: `${(strength / 4) * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        <div className={`h-full rounded-full ${getStrengthColor(strength)}`}></div>
      </motion.div>
      <p className="text-sm text-gray-600 mt-1">{getStrengthText(strength)}</p>
    </div>
  )
}

export default PasswordStrength

