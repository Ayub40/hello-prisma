import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
    // Data Create

    // const result = await prisma.user.create({
    //     data: {
    //         name: "Jhankar Mahbub",
    //         email: "jkr@gmail.com",
    //         profilePhoto: "https://programing-hero.com/level2/jkr.png"
    //     }
    // })


    // console.log(result);
    // console.log("Hello from Prisma!!!");


    // Data Get
    const usersData = await prisma.user.findMany()
    console.log(usersData);

    // const usersData = await prisma.user.findMany({
    //     where: {
    //         // id: 2
    //         name: "Ayub Khan"
    //     }
    // })
    // console.log(usersData);



    // const findUserById = await prisma.user.findUnique({
    //     where: {
    //         id: 5
    //     }
    // })
    // console.log(findUserById);


    // const findUniqueOrThrow = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(findUserById);


    // update user data
    const updateUser = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "Mezba Abedin",
            email: "mez@gmail.com"
        }
    })
    console.log(updateUser);

}

main()
