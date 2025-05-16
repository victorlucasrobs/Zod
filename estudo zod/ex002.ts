import {z} from "zod"

const userSchema = z.object({
  email : z.string().email(),
  age: z.number().min(18).max(105),
  apelido: z.string().min(2).optional()
})

const user = {
  email: "valido@gmail.com",
  age : 100,
  apelido : "jojo"
}

//console.log(userSchema.parse(user))

const {success, error} = userSchema.safeParse(user)


if(!success) {
 console.dir(error)
}else {
  console.log(`tudo certo com o ${user.email} ,bem vindo ${user.apelido}`)
}