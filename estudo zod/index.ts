import {nullable, z} from "zod"

// zod mapa
const cartSchema = z.object({
  clientId : z.string().uuid(),
  iten: z.array(z.object({
      name: z.string().min(3),
      price: z.number().positive(),
      qtd: z.number().int().min(1),
      description : z.string().nullable(),
      categories: z.array(z.string()).min(1)
    }),)
})

const carrinho = {

}


const {success, error} = cartSchema.safeParse("carrinho")
