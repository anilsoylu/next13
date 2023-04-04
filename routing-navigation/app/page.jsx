import Link from "next/link"

function HomePage() {
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/docs">Docs</Link>
      <br />
      <Link href="/docs/getting-started">Docs/Getting Started</Link>
      <br />
      <Link
        href={{
          pathname: "/docs/getting-started",
          query: { name: "Next.js", framework: "React" },
        }}
        target="_blank"
        className="test"
      >
        About Page Obj
      </Link>
    </div>
  )
}

export default HomePage
