const { Comment } = require('../models')

const commentData = [
    {
        "comment": "The coolest of beans!",
        "user_id": "1",
        "post_id": "1"

    },
    {
        "comment": "I like JQuery!",
        "user_id": "2",
        "post_id": "2"

    },
    {
        "comment": "Super Neat!",
        "user_id": "3",
        "post_id": "3"

    },
    {
        "comment": "Angular is my favorite!",
        "user_id": "4",
        "post_id": "4"

    },
    {
        "comment": "I prefer the command line!",
        "user_id": "5",
        "post_id": "5"

    },
    {
        "comment": "Like pinto beans?!",
        "user_id": "3",
        "post_id": "2"

    },
    
];

const seedCommentData = () => Comment.bulkCreate(commentData);


module.exports = seedCommentData;