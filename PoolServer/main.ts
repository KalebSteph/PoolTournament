// @ts-types="npm:types/express"
import express, {Request, Response} from "npm:express";
const app = express()

app.get("/", ( _: Request , response: Response)=> {
response.send("Welcome to our Holiday Server")
})

app.listen(3005)
console.log("Listening on port 3005");
