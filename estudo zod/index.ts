import { string, z,} from "zod"

const userSchema = z.object({
  email : z.string().email(),
  age: z.number().min(18).max(105),
  apelido: z.string().min(2).optional()
})

const user = {
  email: "valido@gmail.com",
  idade: 123,
}

console.log(userSchema.safeParse(user))