import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Book = () => {
    const params = useParams()
    const {slug} = params
    const [book, setBook] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/api/getbook/${slug}`)
            setBook(result.data) // this data is coming from ajax req
        }
        fetchData()
    }, [])
  return (
    <div>{book.slug}</div>
  )
}

export default Book