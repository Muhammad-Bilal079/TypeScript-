import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePasswordStore } from "../store"

const BreachChecker: React.FC = () => {
  const { password, breached, setBreached } = usePasswordStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkBreach = async () => {
      if (password.length < 8) {
        setBreached(false)
        setError(null)
        return
      }

      setLoading(true)
      setError(null)

      try {
        // Hash the password using SHA-1
        const encoder = new TextEncoder()
        const passwordData = encoder.encode(password)
        const hashBuffer = await crypto.subtle.digest("SHA-1", passwordData)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase()

        const prefix = hashHex.slice(0, 5)
        const suffix = hashHex.slice(5)

        // Make API call to haveibeenpwned
        const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`)

        if (!response.ok) {
          throw new Error("Failed to fetch breach data")
        }

        const responseText = await response.text()
        const breachCount = responseText.split("\n").find((line) => line.startsWith(suffix))

        setBreached(!!breachCount)
      } catch (error) {
        console.error("Error checking for breach:", error)
        setError("Failed to check for breaches. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    checkBreach()
  }, [password, setBreached])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Breach Check</h2>
      {loading ? (
        <p className="text-sm text-gray-600">Checking for breaches...</p>
      ) : error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : breached ? (
        <p className="text-sm text-red-600">
          This password has been found in known data breaches. Please choose a different password.
        </p>
      ) : (
        <p className="text-sm text-green-600">No known breaches found for this password.</p>
      )}
    </motion.div>
  )
}

export default BreachChecker

