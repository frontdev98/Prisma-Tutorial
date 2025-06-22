const {PrismaClient} = require('../generated/prisma/client');
const client = new PrismaClient();

class PostModel {
    async getAll() {
        return client.post.findMany();
    }

    async getOne(id) {
        return client.post.findUnique({
            where: {
                id
            }
        });
    }

    // async getComments(postId) {
    //     return client.post.findUnique({

    //     })
    // }

    async create(title, description) {
        return client.post.create({
            data: {
                title,
                description
            }
        });
    }

    async update(id, title, description) {
        return client.post.update({
            where: {id},
            data: {title, description},
        });
    }

    async delete(id) {
        return client.post.delete({
            where: {id}
        });
    }
}

module.exports = new PostModel();