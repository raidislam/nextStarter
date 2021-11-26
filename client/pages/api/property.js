// import db from '../../db';
// require('dotenv').config()
import { sqlQuery } from "../../lib/db";

const handler = async (req,res)=>{
    try{
        if(req.method === 'POST'){
            res.json({message:'comming soon'})
        }else if(req.method === 'GET'){
            const result = await sqlQuery("SELECT * FROM property_list")
            return res.json(result)
        }
       

    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler;



// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         // Process a POST request
//     } else if (req.method === 'GET') {
//         // Handle any other HTTP method
//         const sqlDataGet = "SELECT * FROM property_list";
//         db.query(sqlDataGet,(err,result)=>{
//             if(err){
//                 res.send(err)
//             }else{
//                 res.send(result)
//             }
//         })
//     }
// }