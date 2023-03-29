import mongoose from 'mongoose';

const schema = mongoose.Schema({
    handle: String,
    time: Number,
    tuit: String,
    profilePicture: String,
    liked: Boolean,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
}, { collection: 'tuits' });
export default schema;