import db from '../../db';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
    } else if (req.method === 'GET') {
        // Handle any other HTTP method
        const sqlDataGet = "SELECT * FROM property_list";
        db.query(sqlDataGet,(err,result)=>{
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    }
}