// pnpm tsx src/index.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

    // Data Create

    // const result = await prisma.user.create({
    //     data: {
    //         name: "Sarmin Akter",
    //         email: "sarmin@gmail.com",
    //         profilePhoto: "https://programing-hero.com/level2/jkr.png"
    //     }
    // })


    // console.log(result);
    // console.log("Hello from Prisma!!!");


    // Data Get // retrive data

    // const usersData = await prisma.user.findMany()
    // console.log(usersData);


    // const usersData = await prisma.user.findMany({
    //     where: {
    //         // id: 2
    //         name: "Ayub Khan"
    //     }
    // })
    // console.log(usersData);


    // single data retrive by id
    
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
    // const updateUser = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "Mezba Abedin",
    //         email: "mez@gmail.com"
    //     }
    // })
    // console.log(updateUser);



    // Update multiple users by condition (eta dile update korle data show korbe na.. console.log e --> { count: 1 },, emon asbe,, konita data update hoyse seta show korbe,,, R data show korte hole --> updateMany er jaigai ( updateManyAndReturn ) use korte hobe)


    // const updateProfilePhoto = await prisma.user.updateMany({
    //     where: {
    //         profilePhoto: null
    //     },
    //     data: {
    //         profilePhoto: "https://programing-hero.com/level2/default-image.png"
    //     }
    // })
    // console.log(updateProfilePhoto)




    // Update multiple users by condition

    // const updateProfilePhoto2 = await prisma.user.updateManyAndReturn({
    //     where: {
    //         id: {
    //             gt: 2
    //         }
    //     },
    //     data: {
    //         profilePhoto: "https://programing-hero.com/level2/default-image.png"
    //     }
    // })
    // console.log(updateProfilePhoto2)


    // Delete METHODS ===========================================

    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 1
    //     }
    // })

    // console.log(deleteUser);


    // Delete multiple users by condition
    // const deleteUser = await prisma.user.deleteMany({
    //     where: {
    //         id: {
    //             lt: 3
    //         }
    //     }
    // })

    // console.log(deleteUser)

    // Retrive all data from DB
    // console.log(await prisma.user.findMany())

}

main()
