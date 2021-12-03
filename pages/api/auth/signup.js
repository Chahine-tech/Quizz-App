import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const acceptedFields = ['firstname', 'lastname', 'email', 'password', 'passwordConfirmation', 'birthdate']

  const missingValues = acceptedFields.filter(field => !req.body[field])
  if (!isEmpty(missingValues)) {
    return res.status(400).json({
      error: `Values ${missingValues.join(', ')} are missing`
    })
  }

  const { firstname, lastname, email, password, passwordConfirmation, birthdate } = req.body

  if (password !== passwordConfirmation) {
    return res.status(400).json({
      error: "Password and confirmation doesn't match"
    })
  }

  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        encryptedPassword: hashPassword(password),
        birthdate
      }
    })

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}