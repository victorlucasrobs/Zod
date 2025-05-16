import { z } from "zod"

const orderSchema = z.object({
  size : z.enum(["P","M","G"]),  ///enum e uma validação que o aceita exatamente o que tiver no parametro, no caso o "p,m,g"
  flavor : z.string().min(3),
  extras : z.array(z.string().min(1)).optional(),
  price : z.number().positive().optional(),
}).transform(order => {
  const basePrice = {
    "P" : 20,
    "M" : 30,
    "G" : 40,
  }[order.size]

  const extraPrice = (order.extras?.length|| 0) * 5

  return {
    ...order,
    price : basePrice + extraPrice
  }
})

const order = {
  size: "G",
  flavor: "frango",
  extras: ["catupiry","bacon"]
}

const {success, data} = orderSchema.safeParse(order)
console.log(success ,data)