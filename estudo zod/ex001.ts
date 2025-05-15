import {z} from "zod"


/// primeiro pegamos schema, que basicamentte são o requisitos que nossa 
// varialvel quem que seguir
const userNameSchema = z.string().min(3, "skideiro, skidaes, nome pequeno demais")

const {success, error } = userNameSchema.safeParse("ze")
// ese if é "CASO NÃO SEJA UM SUCESSO, ME MOSTRE O ERRO"
if(!success) {
  console.dir(error.errors[0].message)
}

//console.log(userNameSchema.parse("jo"))
// o parse("") de manda se foi um erro e a infirmações do erro 
// ja o safeParse("") e manda dois resultados, o bolean se foi sucesso ou não, 
// e um error que vc pode literalmente pegar so oque vc quiser de entro o erro
