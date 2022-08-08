const { review } = require('../db')

const createReview = async (id, description, rating) => {
    try {
        await review.create({id, description, rating})
    } catch(error){
        throw error.message
    }
}

module.exports = {
    createReview
}