import { PrismaClient } from '@prisma/client'
import { isEmpty } from 'lodash'
import { hashPassword } from '../../../utils/password'


export default async function handler(req, res) {
  const acceptedFields = ['email', 'password', 'passwordConfirmation']

  

  const { email, password, passwordConfirmation } = req.body
  console.log(req.body,'666')
  const missingValues = acceptedFields.filter(field => !req.body[field])
  if (!isEmpty(missingValues)) {
    return res.status(400).json({
      error: `Values ${missingValues.join(', ')} are missing`
    })
  }
  if (req.method === 'POST') {
  const prisma = new PrismaClient()
  const existingEmail = await prisma.user.findFirst(
    {
      where: { email: email}
    }
  ) 
if (existingEmail){
  prisma.$disconnect()
  return  res.status(400).json({
    error: "User exists already"
  })
}
  if (password !== passwordConfirmation) {
    prisma.$disconnect()
    return res.status(400).json({
      error: "Password and confirmation doesn't match"
    })
  }
console.log("5858")
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashPassword(password),
      }
    })
    console.log(user, "lelele")
    res.status(201).json({user})
  } catch(err) {
    res.status(400).json({ error: err.message })
  }}else{
    res.status(400).json({ error: err.message })
  }
}