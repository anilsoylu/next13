import { notFound } from "next/navigation"
import React from "react"

function BlogPage({ searchParams }) {
  if (searchParams.test === "true") {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error("Error in Blog Page")
  }

  return (
    <div>
      <h2>Blog Page</h2>
    </div>
  )
}

export default BlogPage
