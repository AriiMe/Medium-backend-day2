const { Schema, model } = require('mongoose')

const reviewsSchema = new Schema(
    {
        text: {
            type: String,
            required: true,

        },
        user: {
            type: String,
            required: true,
        },
    },
    { timestamp: true }
)

module.exports = model("reviews", reviewsSchema)