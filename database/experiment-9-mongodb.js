// Experiment 9 - MongoDB
// Project: Movie Review Blog

// Step 1: Select Database
use MovieReviewDB

// Step 2: Create Collection
db.createCollection("reviews")

// Step 3: Insert One Document
db.reviews.insertOne({
    reviewId: 101,
    movieTitle: "Interstellar",
    reviewerName: "Arun",
    genre: "Sci-Fi",
    rating: 9,
    review: "Excellent science fiction movie",
    year: 2014
})

// Step 4: Retrieve Documents
db.reviews.find()

// Step 5: Conditional Query
db.reviews.find({ rating: { $gt: 8 } })

// Step 6: Update Document
db.reviews.updateOne(
    { reviewId: 101 },
    { $set: { rating: 10 } }
)

// Step 7: Delete Document
db.reviews.deleteOne({ reviewId: 105 })

// Step 8: Sort Documents
db.reviews.find().sort({ rating: -1 })

// Step 9: Count Documents
db.reviews.countDocuments()