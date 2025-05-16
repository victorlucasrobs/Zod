import { z } from "zod"

const userSchema = z.object({
  name: z.string(),
  instagram: 
    z.string()
    .url()
    .refine(url => url.includes("instagram.com"),
    {message : "coloque uma URL do instagram valida"}).optional()
})

const user = {
  name : "Saga",
  instagram: "http://www.instagram.com/PINTAO.IMPERIAL/"
}

const {data, error} = userSchema.safeParse(user)
console.log(data , error)