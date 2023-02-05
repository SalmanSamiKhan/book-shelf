import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: String, required: true },
        genre: { type: String, required: true },
        desc: { type: String, required: true },
        slug: { type: String, required: true },
    },
    {
        timestamps: true, // maintain operation time
    }
);

const Book = mongoose.model('Book', bookSchema);
export default Book