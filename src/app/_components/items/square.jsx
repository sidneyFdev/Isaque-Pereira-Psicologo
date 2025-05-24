"use client"

import { useEffect, useState } from "react"

export const SquaresBackground = ({ children }) => {
  const [squares, setSquares] = useState([])

  const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const randomize_square_props = () => {
    const width = randomInRange(100, 300)
    const top = `${randomInRange(10, 90)}%`
    const left = `${randomInRange(10, 90)}%`

    return { width, top, left }
  }

  useEffect(() => {
    const total_squares = randomInRange(6, 15)
    const generatedSquares = []

    for (let i = 0; i < total_squares; i++) {
      generatedSquares.push(randomize_square_props())
    }

    setSquares(generatedSquares)
  }, [])

  return (
    <div className="cloudy-bg">
      {squares.map((square, index) => (
        <div
          key={index}
          className="app_square"
          style={{
            width: square.width,
            height: square.width,
            top: square.top,
            left: square.left,
          }}
        />
      ))}
      {children}
    </div>
  )
}
