import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface PhishingDetectorProps {
  password: string
}

const PhishingDetector: React.FC<PhishingDetectorProps> = ({ password }) => {
  const [isVulnerable, setIsVulnerable] = useState(false)

  useEffect(() => {
    const commonWeakPasswords = ["password", "123456", "qwerty", "admin", "letmein", "welcome"]
    setIsVulnerable(commonWeakPasswords.includes(password.toLowerCase()))
  }, [password])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Phishing Resistance Check</h2>
      {isVulnerable ? (
        <p className="text-sm text-red-600">
          Warning: This password is commonly used and vulnerable to phishing attacks. Please choose a stronger password.
        </p>
      ) : (
        <p className="text-sm text-green-600">Good job! This password is not commonly used in phishing attacks.</p>
      )}
    </motion.div>
  )
}

export default PhishingDetector

