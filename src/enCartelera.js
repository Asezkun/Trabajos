const fs = require("fs");

const enCartelera = {
    db:"./data/movies.json",
    titulo: "BIENVENIDO A CARTELERA",
    leerJSON: function(){
        let moviesJSON = fs.readFileSync(this.db, "utf-8");
        let movies = JSON.parse(moviesJSON);
        return movies;
    },
    cantidad:function(){
        return this.leerJSON().total_movies;
    },
    listarPelis:function(){
        let db = this.leerJSON();
        let movies = [];
        db.movies.forEach(function(movie){
            movies.push(movie);
        })
        return movies
    },
    
};
module.exports=enCartelera;
