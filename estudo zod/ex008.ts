import {z} from "zod"

const userSchema = z.object({
  name : z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  age : z.number().min(18).max(105),
  isADM: z.boolean().default(false),
})

type userType = z.infer<typeof userSchema>

const user : userType = {
  name : "seya",
  email : "seya@gmail",
  password : "123456",
  age : 20,
  isADM : true
}

type userTypeInput = z.input<typeof userSchema>
type userTypeOutput = z.output<typeof userSchema>