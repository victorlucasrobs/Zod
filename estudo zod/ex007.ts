import {z} from "zod"

const devSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  primaryProgrammingLanguage: z.string().min(2),
  level : z.enum(["junior","pleno","senior"]),
  expirienceYears: z.number(),
  tech : z.array(z.string()).min(1),
}).refine(dev =>{
  if(dev.level === "senior"){
    return dev.expirienceYears >= 5 && dev.tech.length >= 2
  }
  return true
},{message: `nem fudendo é senior !!!`})

const dev1 = {
  name: "shina",
  email : "shinasss@gmail.com",
  primaryProgrammingLanguage : "python",
  level : "senior",
  expirienceYears : 6,
  tech : ["react","node","zod","typescript"]
}

const dev2 = {
  name: "shiryu",
  email: "shiryu@gmail.com",
  primaryProgrammingLanguage: "typescript",
  level: "junior",
  expirienceYears: 1,
  tech: ["react", "node"],
}


const {error} = devSchema.safeParse(dev2)
console.log(error)
