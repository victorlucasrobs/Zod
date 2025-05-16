import {nullable, z} from "zod"

// zod mapa
const cartSchema = z.object({
  clientId : z.string().uuid(),
  itens: z.array(z.object({
      name: z.string().min(3),
      price: z.number().positive(),
      qtd: z.number().int().min(1),
      categories: z.array(z.string()).min(1)
    }))
})

const cart = {
  clientId: crypto.randomUUID(),
  itens: [{
    name : "Macbook",
    price : 6000,
    qtd : 1,
    categories : ["eletronico","computador","portatil"]
  }, { name : "Macbook pro",
    price : 10000,
    qtd : 1,
    categories : ["eletronico","computador","portatil"]
  }]
}

console.log(cartSchema.parse(cart))
