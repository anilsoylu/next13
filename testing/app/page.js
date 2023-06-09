"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

function HomePage() {
  const router = useRouter()
  const [value, setValue] = useState("")

  const onSubmit = () => {
    router.replace(`/test=${value}`)
    setValue("")
  }

  return (
    <div>
      <h1>Home Page</h1>
      <input
        value={value}
        placeholder="Search someting..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSubmit} name="Submit">
        Search
      </button>
      <Link href="/about">Go About...</Link>
    </div>
  )
}

export default HomePage
