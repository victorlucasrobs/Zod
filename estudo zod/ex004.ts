import {z} from "zod"

const userSchema = z.object({
  nome : z.string().min(2),
  workDays : z.array(
    z.string().transform(day => day.slice(0,3).toLocaleLowerCase())
  )
})

const user = {
  nome: "ernie",
  workDays : ["segunda","terça","quarta","quinta","sexta"]
}

const {success, data} = userSchema.safeParse(user)
console.log(data)