const mongoose = require('mongoose');
// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/movieDB';
// Updated Movie Schema to match the new fields
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true }, // Added field
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    releaseYear: { type: Number, required: true }, // Added field
    language: { type: String, required: true }
});
// Create the Movie Model
const Movie = mongoose.model('Movie', movieSchema);
async function run() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB successfully.\n');
        // Clear existing data for a clean demonstration
        await Movie.deleteMany({});
        // 1. Insert multiple movie documents
        const moviesToInsert = [ 
            {title:"3 Idiots", director:"Rajkumar Hirani", genre:"Comedy", rating:9.2, releaseYear:2009, language:"Hindi"}, 
            {title:"KGF Chapter 2", director:"Prashanth Neel", genre:"Action", rating:8.8, releaseYear:2022, language:"Kannada"}, 
            {title:"Dangal", director:"Nitesh Tiwari", genre:"Drama", rating:8.9, releaseYear:2016, language:"Hindi"}, 
            {title:"Baahubali", director:"S. S. Rajamouli", genre:"Action", rating:8.7, releaseYear:2015, language:"Telugu"}, 
            {title:"Jawan", director:"Atlee", genre:"Action", rating:7.8, releaseYear:2023, language:"Hindi"}, 
            {title:"Drishyam", director:"Nishikant Kamat", genre:"Thriller", rating:8.4, releaseYear:2015, language:"Hindi"}, 
            {title:"Pushpa", director:"Sukumar", genre:"Action", rating:8.1, releaseYear:2021, language:"Telugu"} 
        ]; 
        await Movie.insertMany(moviesToInsert);
        console.log('1. Multiple movie documents inserted.');
        // 2. Display all movies having a rating greater than 8.5
        const highRatedMovies = await Movie.find({ rating: { $gt: 8.5 } });
        console.log('\n2. Movies with rating > 8.5:');
        console.log(highRatedMovies);
        // 3. Display the title and rating of the movie having the second highest rating
        const secondHighest = await Movie.find({}, { title: 1, rating: 1, _id: 0 })
            .sort({ rating: -1 })
            .skip(1)
            .limit(1);
        console.log('\n3. Movie with the second highest rating:');
        console.log(secondHighest[0]);
        // 4. Increase the rating of all Action movies by 0.2
        const updateResult = await Movie.updateMany(
            { genre: 'Action' },
            { $inc: { rating: 0.2 } }
        );
        console.log(`\n4. Updated ${updateResult.modifiedCount} Action movies by adding 0.2 to their rating.`);
        // 5. Count the total number of Hindi movies
        const hindiMovieCount = await Movie.countDocuments({ language: 'Hindi' });
        console.log(`\n5. Total number of Hindi movies: ${hindiMovieCount}`);
        // 6. Delete the movie having the title "Jawan"
        const deleteResult = await Movie.deleteOne({ title: 'Jawan' });
        console.log(`\n6. Deleted movie "Jawan". Deleted count: ${deleteResult.deletedCount}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the connection
        await mongoose.connection.close();
        console.log('\nDatabase connection closed.');
    }
}
run();