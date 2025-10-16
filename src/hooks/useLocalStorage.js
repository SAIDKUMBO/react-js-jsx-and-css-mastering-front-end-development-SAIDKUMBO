import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue){
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) { return initialValue }
  })

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(state)) } catch {}
  }, [key, state])

  return [state, setState]
}
