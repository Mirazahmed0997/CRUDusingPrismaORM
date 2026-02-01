// npm install prisma@5 @prisma/client@5


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

// creater data



//   const user = await prisma.user.create({
//     data: {
//       name: "ISty",
//       email: "isty1@example.com",
//       profilePhoto: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//     }
//   });



// find unique data by primary key

// const user = await prisma.user.findUnique({
//     where: {
//         id: 1
//     }
// });


// find all data

// const user = await prisma.user.findMany({
    
// });



// update data

// const user = await prisma.user.update({
//     where: {
//         id: 1
//     },
//     data: {
//         name: "Miraz Ahmed",
//         email: "miraz.ahmed.updated@example.com"
//     }
// });


// update data by non-primary field
// const user = await prisma.user.update({
//     where: {
//         profilePhoto: null
//     },
//     data: {
//        profilePhoto: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//     }
// });

// delete data


const user = await prisma.user.delete({
    where: {
        id: 1
    }
});

  console.log(user);
}







main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
