// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create authors
    const author1 = await prisma.author.create({
        data: {
            name: 'J.K. Rowling',
            contact: '+63412',
            bio: 'British author, best known for the Harry Potter series.',
            privacy: 'PUBLIC'
        }
    });

    const author2 = await prisma.author.create({
        data: {
            name: 'George R.R. Martin',
            contact: '+63413',
            bio: 'American novelist and short story writer, best known for A Song of Ice and Fire.',
            privacy: 'PUBLIC'
        }
    });

    // Create books
    const book1 = await prisma.book.create({
        data: {
            title: "Harry Potter and the Philosopher's Stone",
            published_year: 1997,
            bio: 'The first book in the Harry Potter series.',
            privacy: 'PUBLIC',
            authors: {
                create: {
                    author: {
                        connect: { id: author1.id }
                    }
                }
            }
        }
    });

    const book2 = await prisma.book.create({
        data: {
            title: 'A Game of Thrones',
            published_year: 1996,
            bio: 'The first novel in A Song of Ice and Fire, an epic fantasy series.',
            privacy: 'PUBLIC',
            authors: {
                create: {
                    author: {
                        connect: { id: author2.id }
                    }
                }
            }
        }
    });

    console.log({ author1, author2, book1, book2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
