import pkg from "pg";
const  {Client} = pkg;

export const client = new Client({
    host: "db.pfesgcbfagujcelhrrdj.supabase.co",
    user: "postgres",
    password: "iwanhanafiah",
    database: "postgres",

});

 await client.connect();
console.log("Terhubung Ke basis data");