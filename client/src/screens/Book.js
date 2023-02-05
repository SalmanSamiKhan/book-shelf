import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
    const params = useParams()
    const {slug} = params
  return (
    <div>{slug}</div>
  )
}

export default Book