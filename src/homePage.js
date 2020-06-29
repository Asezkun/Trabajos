const fs = require("fs");

const homePage = {
db:"./data/movies.json",
titulo: "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores  películas, incluso mucho mejor que Netflix, Cuevana y PopCorn",
leerJSON: function(){
    let moviesJSON = fs.readFileSync(this.db, "utf-8");
    let movies = JSON.parse(moviesJSON);
    return movies;
},
cantidad:function(){
    return this.leerJSON().total_movies;
},
listarPelis:function(){
    let movies = this.leerJSON();
    let titleMovies = [];
    movies.movies.forEach(function(movie){
        titleMovies.push(movie.title)
    }),
    titleMovies.sort()
    return titleMovies
}
}
module.exports=homePage;
