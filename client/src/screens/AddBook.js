import React, { useState } from 'react'

const AddBook = () => {
    const initialBook = {
        name: '', author: '', year: '', genre: '', desc: ''
    }
    const [book, setBook] = useState(initialBook)

    const handleChange = (e) => {
        /*
        name = e.target.name // e.g. name = year
        value = e.target.value // e.g. value = 1967
        setBook({...book, [name]:value})
        spread operator //e.g. year is set to 1967
        */
        // In one line it can be written as
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/api/addbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: book.name, author: book.author, year: book.year, genre: book.genre, desc: book.desc })
        });
        const json = await response.json()
        console.log(json)
        // navigate('/')
        setBook(initialBook)
        alert('Request for adding a book was submitted')
        
    }

    return (
        <div className='addbook my-5'>
            <h1 className="my-5 text-center">Upload Your Book Here</h1>
            <form action='/api/addbook' method='post' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' id="name" value={book.name} minLength={2} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" name='author' id="author" value={book.author} minLength={3} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="text" className="form-control" name='year' id="year" value={book.year} minLength={4} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input type="text" className="form-control" name='genre' id="genre" value={book.genre} minLength={3} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" name='desc' id="desc" value={book.desc} minLength={5} onChange={handleChange} required/>

                </div>
                <div className="mb-3">
                    <label htmlFor="cover" className="form-label">Cover Image</label>
                    <input type="file" className="form-control" id="cover" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default AddBook