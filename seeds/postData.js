const { Post } = require('../models')

const postData = [
    {
        "post_title": "JavaScript",
        "post_message": "JavaScript is cool beans!",
        "user_id": "1"
    },
    
    {
        "post_title": "Down with JQuery",
        "post_message": "JQuery is bloated.",
        "user_id": "2"
    },
    
    {
        "post_title": "Tailwinds is neat",
        "post_message": "Tailwinds is easy to use.",
        "user_id": "3"
    },
    
    {
        "post_title": "Angular: Should you learn it?",
        "post_message": "Probably.",
        "user_id": "4"
    },
    
    {
        "post_title": "Using a SQL GUI?",
        "post_message": "It's much easier.",
        "user_id": "5"
    }
    
];

const seedPostData = () => Post.bulkCreate(postData);


module.exports = seedPostData;