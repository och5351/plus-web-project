const mongoose = require('mongoose');

// 임시 게시글 스키마 구조
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},{
    collection: 'post',
},);

// 모델 추가
postSchema.statics.create = function (payload) {
    const post = new this(payload);

    return post.save();
}

// 모델 전체 검색
postSchema.statics.findAll = function () {
    return this.find({});
}

// 게시글id로 검색
postSchema.statics.findOneByPostid = function (_id) {
    return this.find({ _id });
}

// 게시글 id를 통해 업데이트
postSchema.statics.updateByPostid = function (_id, payload) {
    return this.findOneAndUpdate({ _id }, payload, { new: true });
}

// 게시글 id를 통해 삭제
postSchema.statics.deleteByPostid = function (_id) {
    return this.remove({ _id });
}

module.exports = mongoose.model('Post', postSchema);