"use client"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

function HomePage() {
  return (
    <div className="container mx-auto">
      <Title>Hello World</Title>
    </div>
  )
}

export default HomePage
