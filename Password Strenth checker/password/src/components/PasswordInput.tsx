import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { usePasswordStore } from "../store"
import zxcvbn from "zxcvbn"

const PasswordInput: React.FC = () => {
  const { password, setPassword, setStrength, setSuggestions } = usePasswordStore()

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password)
      setStrength(result.score)
      setSuggestions(result.feedback.suggestions)
    } else {
      setStrength(0)
      setSuggestions([])
    }
  }, [password, setStrength, setSuggestions])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Enter your password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your password"
      />
    </motion.div>
  )
}

export default PasswordInput

