import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    GitHubProvider({
      clientId: "1b2996ee8dcf8432d6b6",
      clientSecret: "04be00fcceb8a3a3cd6bd079a1357bd779a7c138",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.username }
        })

        if (user.password === credentials.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
})

// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from "../../../lib/mongodb"
// import {PrismaClient} from "@prisma/client"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// const prisma = new PrismaClient()
// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   //adapter: MongoDBAdapter(clientPromise),
//   // Configure one or more authentication providers
//   // Configure one or more authentication providers
// //   session: {
// //     secret: "hello",
// //     jwt: true,
// //     maxAge: 30 * 24 * 60 * 60
// // },
//   providers: [
//     GithubProvider({
//       clientId: "1b2996ee8dcf8432d6b6",
//       clientSecret: "04be00fcceb8a3a3cd6bd079a1357bd779a7c138",
//     }),

//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: 'Credentials',
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Email", type: "email", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         const prisma = new PrismaClient()
//         //console.log(credentials)
        
//         // Add logic here to look up the user from the credentials supplied
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.username }
//         })
// console.log("test", user)
//         if (user.password===credentials.password) {
//           // Any object returned will be saved in `user` property of the JWT
//           console.log("test2", user)
//           return user
//         } else {
//           // If you return null or false then the credentials will be rejected
//           return null
//           // You can also Reject this callback with an Error or with a URL:
//           // throw new Error('error message') // Redirect to error page
//           // throw '/path/to/redirect'        // Redirect to a URL
//         }
//       },

//     })
//   ],
//   // callbacks:{
//   //   async session(session, token) {
//   //     session.user = token.user
//   //     console.log("test3",session)
//   //     return session
//   //   },
//   //   async jwt(token, user, account, profile, isNewUser) {
//   //     if (typeof user !== typeof undefined)
//   //     {
//   //         token.user = user;
//   //     }
//   //     return token;
//   // }
//   // }
// })