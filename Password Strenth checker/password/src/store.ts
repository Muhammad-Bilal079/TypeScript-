import { create } from "zustand"

interface PasswordState {
  password: string
  strength: number
  suggestions: string[]
  breached: boolean
  points: number
  level: number
  setPassword: (password: string) => void
  setStrength: (strength: number) => void
  setSuggestions: (suggestions: string[]) => void
  setBreached: (breached: boolean) => void
  addPoints: (points: number) => void
}

export const usePasswordStore = create<PasswordState>((set) => ({
  password: "",
  strength: 0,
  suggestions: [],
  breached: false,
  points: 0,
  level: 1,
  setPassword: (password) => set({ password }),
  setStrength: (strength) => set({ strength }),
  setSuggestions: (suggestions) => set({ suggestions }),
  setBreached: (breached) => set({ breached }),
  addPoints: (points) =>
    set((state) => ({
      points: state.points + points,
      level: Math.floor((state.points + points) / 100) + 1,
    })),
}))

