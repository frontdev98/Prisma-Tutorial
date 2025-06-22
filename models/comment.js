const { PrismaClient  } = require('../generated/prisma/client');

class CommentModel {
    async getAll() {
        return client.comment.findMany();
    }

    async getOne(id) {
        return client.comment.findUnique({
            where: {
                id
            }
        });
    }

    async create(content) {
        return client.comment.create({
            data: {
                content
            }
        });
    }

    async update(id, content) {
        return client.comment.update({
            where: {id},
            data: {content},
        });
    }

    async delete(id) {
        return client.comment.delete({
            where: {id}
        });
    }
}

module.exports = new CommentModel();