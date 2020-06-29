const contactos = require("./contactos");
const enCartelera = require("./enCartelera");
const homePage = require("./homePage");
const masVotadas = require("./masVotadas");
const preguntasFrecuentes = require("./preguntasFrecuentes");
const sucursales = require("./sucursales");
const contacto = require("./contactos");

let index = {
    contactos:function(res){
        res.write(`TUTILO: ${contacto.titulo}`);
        res.write("\n\n");
        res.write(`Contenido: ${contacto.contenido}`);
        res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo);
        res.write(`\nTotal de peliculas: ${enCartelera.cantidad()}\n\n`);
        res.write(`LISTADO DE PELICULAS\n\n`)
        let movies = enCartelera.listarPelis();
        movies.forEach(function(movie){
            res.write(`\n`)
            res.write(movie.title);
            res.write("\n-------------------------------------\n")
            res.write(movie.overview);
            res.write("\n--------------------------------------\n")
        })
        res.end()
    },
    homePage:function(res){
          //Titulo
          res.write(homePage.titulo);
          //cantidad de peliculas
          res.write(`\nTotal: ${homePage.cantidad()}\n\n`);
          //titulos de peliculas 
          let pelis = homePage.listarPelis();
          for(peli of pelis){
              res.write(peli);
              res.write("\n");
            }
            res.write("\n\n\nRecordá que podés visitar las secciones: \n\n")
            res.write("---------------------\n")
            res.write("i. En Cartelera\n")
            res.write("ii. Más Votadas\n")
            res.write("iii. Sucursales\n")
            res.write("iv. Contacto\n")
            res.write("v. Preguntas Frecuentes\n")
            res.end()
    },
    masVotadas:function(res){
        res.write(`TITULO : ${masVotadas.titulo}`);
        res.write("\n\n");
        res.write(`TOTAL DE PELICULAS : ${masVotadas.cantidad()}`);
        res.write(`Rating Promedio: ${masVotadas.promedio()}`);
        res.write("\n\n");
        res.write("Listado de peliculas\n\n");
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie){
            res.write("\n");
            res.write(`${movie.title} Rating: ${movie.vote_average}`);
            res.write("\n");
            res.write(movie.overview);
            res.write("\n")
        })
        res.end()
    },
    
    preguntasFrecuentes:function(res){
        res.write(`TITULO: ${preguntasFrecuentes.titulo}`);
        res.write("\n\n");
        res.write(`TOTAL: ${preguntasFrecuentes.cantidad()}`);
        res.write("\n\n");
        let faqs = preguntasFrecuentes.listarPreguntas()
        for(faq of faqs){
            res.write("\n")
            res.write(`Preguntas:${faq.faq_title}`);
            res.write("\n");
            res.write(`Respuesta: ${faq.faq_answer}`);
            res.write("\n")
        }
        res.end()
    },
    sucursales:function(res){
        res.write(`TITULO: ${sucursales.titulo}`)
        res.write("\n\n");
        res.write(`Total de Salas: ${sucursales.cantidad()}`)
        res.write("\n\n");
        let sucursal = sucursales.listarSucursal();
        for(sucu of sucursal){
            res.write("\n\n");
            res.write(`Nombre: ${sucu.name}`);
            res.write("\n\n");
            res.write(`Direccion: ${sucu.address}`);
            res.write(`\n\n`);
            res.write(`Descripcion: ${sucu.description}`)
        }
        res.end()

    },


};
module.exports=index;