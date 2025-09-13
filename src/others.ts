import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
    // create some user data / insert some user data

    // const insertUsers = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Mir",
    //             email: "mir@ph.com"
    //         },
    //         {
    //             name: "Tanmoy",
    //             email: "tanmoy@ph.com"
    //         },
    //         {
    //             name: "Mizan",
    //             email: "mizan@ph.com"
    //         },
    //         {
    //             name: "Imun",
    //             email: "imun@ph.com"
    //         }
    //     ]
    // });

    // console.log(insertUsers);

    // retrive all data
    // const users = await prisma.user.findMany()
    const users = await prisma.user.findMany({
        where: {
            // name: "Mir",

            email: {
                contains: "ph.com",
                mode: "insensitive" // case insensitive.
            }
        },
        
        orderBy: {
            // id: 'asc'
            // id: 'desc',
            // name: 'asc'
            name: 'desc'
        }
    })
    console.log(users);

}

others();

