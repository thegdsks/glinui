"use client"

import { useEffect, useState } from "react"

const CursorToggle = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const pref = localStorage.getItem("enableCursorEffect")
    setEnabled(pref === "true")
  }, [])

  const toggleEffect = () => {
    const newVal = !enabled
    localStorage.setItem("enableCursorEffect", String(newVal))
    setEnabled(newVal)
    window.location.reload() // force remount
  }

  return (
    <button
      onClick={toggleEffect}
      className="rounded bg-black p-2 px-4 text-white shadow-md"
    >
      {enabled ? "Disable" : "Enable"} Cursor Effect
    </button>
  )
}

export default CursorToggle
