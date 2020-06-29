const fs = require("fs");

const sucursales = {
    db:"./data/theaters.json",
    titulo: "Nuestras Salas",
    leerJSON: function(){
        let sucursalesJSON = fs.readFileSync(this.db, "utf-8");
        let sucursales = JSON.parse(sucursalesJSON);
        return sucursales;
    },
    cantidad:function(){
        return this.leerJSON().total_theaters;
    },
    listarSucursal:function(){
        let sucursal = this.leerJSON();
        return sucursal.theaters;
    }
};
module.exports=sucursales;