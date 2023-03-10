import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/getbooks')
            setBooks(result.data) // this data is coming from ajax req
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1 className='text-center my-4'>Book Shelf</h1>
            <div className="books d-flex">
                {
                    books.map(book => (
                        <div className='book my-4' key={book._id}>
                            <br />
                            <Link to={`/book/${book.slug}`} className='text-decoration-none'>
                                <img src={book.image}  />
                            </Link>
                            <div className="book-info my-3">
                                <Link to={`/book/${book.slug}`}>
                                    <h5>{book.name}</h5>
                                </Link>
                                <h6>{book.author}</h6>
                                <h6>{book.year}</h6>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home