const logger = require('./logger');

const postModel = require('./models/post');

async function main() {
    const createdPost = await postModel.create('First post', 'Some content');
    const allPosts    = await postModel.getAll();
    const updatedPost = await postModel.update(2, 'Updated first post', 'Updated some content');
    const deletedPost = await postModel.delete(2);

    logger.log('info', createdPost);
    logger.log('info', allPosts);
}

main();