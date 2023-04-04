import { notFound } from "next/navigation"
import React from "react"

export async function generateMetadata({ params }) {
  return {
    title: "Blog Page",
    description: "Blog Page Description",
    keywords: "Blog Page Keywords",
  }
}

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
