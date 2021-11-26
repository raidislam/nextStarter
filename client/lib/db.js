// Require and initialize outside of your main handler

// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    database: "property",
  }
})

// Main handler function
export async function sqlQuery(queryStrings, values=[]) {
  try{
    // Run your query
  let results = await mysql.query(queryStrings,values)

  // Run clean up function
  await mysql.end()

  // Return the results
  return results
}catch(e){
      throw Error(e.message)
  }
}
// const mysql = require("mysql");

// //database object
// const dataBaseConfig = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "property",
// };

// //create the database connection
// const con = mysql.createConnection(dataBaseConfig);

// //connect to the database
// con.connect((error) => {
//   if (error) {
//     console.log("Error connecting to database mysql");
//   } else {
//     console.log("Database connection successful");
//   }
// });

// module.exports = con;


