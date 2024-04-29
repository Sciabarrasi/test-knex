const { options } = require("./options/mysql");
const knex = require("knex")(options);

///EDITAR UN ELEMENTO DE LA TABLA
knex
.from("cars")
.where("id", '=', 5)
.update({ price: 2500 })
.then(() =>{
    console.log("cambio el precio bien");
})
.catch((e) =>{
    console.log(e);
})
.finally(() => {
    knex.destroy();
})


                /// DELETE CON WHERE    
// knex
// .from("cars")
// .where("id", '=', 5)
// .then(() =>{
//     console.log("borre bien");
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     knex.destroy();
// });


                ///VER INFO DE LOS ELEMENTOS
// knex
// .from("cars")
// .select("*")
// .then((res) =>{
//     console.log(res);
// })
// .catch((e) =>{
//     console.log(e);
// })
// .finally(() =>{
//     knex.destroy();
// });


                /// INSERTAR ELEMENTOS A LA TABLA
// knex("cars")
//     .insert([
//         { brand: "bmw", model: "m4", price: 20000 },
//         { brand: "bmw", model: "m5", price: 30000 },
//         { brand: "bmw", model: "m6", price: 40000 },
//         { brand: "fiat", model: "uno", price: 5000 },
//         { brand: "vw", model: "gol", price: 6000 }
//     ])
//     .then(() => {
//         console.log("logre insertar autos");
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
//     .finally(() => {
//         knex.destroy();
//     })


                /// CREAR TABLA
// knex.schema
//   .createTable("cars", (table) => {
//     table.increments("id"),
//         table.string("brand"),
//         table.string("model"),
//         table.integer("price");
//   })
//   .then(() => {
//     console.log("todo bien pude armar la tabla");
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });