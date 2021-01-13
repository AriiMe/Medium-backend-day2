const { Schema, model } = require('mongoose')

const Articles = new Schema({
    headLine: {
        type: String,
        required: true,
    },
    subHead: String,
    content: {
        type: String,
        required: true,
    },
    category: {
        name: String,
        img: String,
    },
    author: {
        name: String,
        img: String,
    },
    reviews: Array,
    cover: String,

},
    { timestamp: true }
)

module.exports = model("Article", Articles)