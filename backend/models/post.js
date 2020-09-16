const mongoose = require('mongoose');
const mongoconnection = require('../lib/mongo_config');

// 임시 게시글 스키마 구조
const postSchema = new mongoose.Schema({
    post_id: {
        type: Number,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
},{
    collection: 'post',
},);

module.exports = mongoose.model('Post', postSchema);