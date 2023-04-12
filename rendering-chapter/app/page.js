"use client"
import React, { useEffect, useState } from "react"

function HomePage() {
  const [message, setMessage] = useState("initial")

  useEffect(() => {
    setMessage("Use Effect manipüle etti")
    console.log("useEffect")
  }, [])
  console.log("Home Page")

  return (
    <div>
      Home Page
      {message}
    </div>
  )
}

export default HomePage
