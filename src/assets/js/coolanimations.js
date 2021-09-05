document.addEventListener('DOMContentLoaded',()=>{
  //anime js
  setTimeout(() => {
  // initial page load animation
  anime.timeline({
      easing:'easeOutSine',
  }).add({
    targets:'.cristiandesigns',
    opacity: 0
  })
  .add({
    targets:'.cristiandesigns',
    scale:[50,1],
    translateY:[20,0],
    translateX:[-70,0],
    color:['blue','white'],
    opacity:[0.7,1],
    delay:498

  }).add({
      targets:'.nav-link',
      scale:[60,1],
      translateY:[30,0],
      translateX:[-50,0],
      rotate:[20,0],
      opacity:[0.7,1],
      // translateY:[20,0],
      delay: (el,i)=>650*i,

  },"-=600")
      }, 1200);


    });


let a = "MONGODB";
// db.inventory.find( { tags: ["red", "blank"] } )

//
// db.pruebasMongo.find({tags:{$all:["red","blank"]}}).pretty();


// AL MENOS UNO CUMPLE
// db.pruebasMongo.find( { tags: "red" } ).pretty();

// SOLO UNO CUMPLE LOS CRITERIOS
// db.pruebasMongo.find( { dim_cm: { $gt: 15, $lt: 20 } } ).pretty();

//TODOS CUMPLEN LOS CRITERIOS
// db.pruebasMongo.find( { dim_cm: {    $elemMatch : { $gt: 15, $lt: 20 }    } } ).pretty();

// PRUEBA EXACTAMENTE
// db.pruebasMongo.find( { dim_cm: {   $elemMatch : {dim_cm: [22.85,30 ]         } } } ).pretty();

// INDEX POSITION second must be gt 25

/*   db.pruebasMongo.find( { "dim_cm.1": { $gt: 25 } } ).pretty(); */

// has 3 elements
/* db.inventory.find( { "tags": { $size: 3 } } );


db.Usuarios_bloqueados.find({Bloqueos:{$elemMatch:{Usuario_bloqueador.Nombre:'rosa'}}});

db.Usuarios_bloqueados.find({"Usuario_bloqueado.Nombre":'Alfonso'})

"""Encontrar todos los usuarios que hayan bloqueado a usuarios que proceden de
Pamplona y tienen entre 20 y 40 años.
Mostrar el nombre y apellidos. (Pista: 2
  registros)"""

db.Usuarios_bloqueados.find({Bloqueos:{$elemMatch:{"Usuario_bloqueador.Ciudad":"Pamplona","Usuario_bloqueador.Edad":{$gt: 20, $lt: 40 }}}}).pretty()




db.Usuarios_bloqueadores.find( {Ciudad:"Pamplona", Edad:{$gt:20, $lt:40}      } ).pretty()









  db.Usuarios_bloqueados.find({Bloqueos:{$elemMatch:{"Usuario_bloqueador.Nombre":'Rosa'}}}).pretty()


db.Usuarios_bloqueados.find({Bloqueos:{"Usuario_bloqueador.Ciudad":'Pamplona'}}).pretty() */

// punto 1



//punto 3

/* db.Grupos_usuarios.find({$and:[{"Miembros.Ciudad":"Valladolid"},{"Miembros.Ciudad":{$ne:"Valencia"}}]},{"Miembros.Ciudad":1}).pretty()


db.Grupos_usuarios.find({$and:[{"Miembros.Ciudad":"Valencia"},{"Miembros.Ciudad":{$ne:"Madrid"}} ] },{Identificador:true,Nombre_Grupo:true}).pretty()


db.Grupos_usuarios.find({Nombre_Grupo: {$in : ["Intercambio de videojuegos", "Jugadores de ajedrez" ] } }, { Miembros:1 }).count()









db.Usuarios_grupos.aggregate([{$group:{_id:"$Ciudad",Usuarios:{$push:{Nombres:"$Nombre",Apellidos:"$Apellidos",Email:"$Email",Grupos:"$Grupos_miembro"     }      }   }        }, {$out:"Ciudades_Usuarios" } ] )
db.Usuarios_grupos.aggregate([{$group:{Ciudad:"$Ciudad",Usuarios:{$push:{Nombres:"$Nombre",Apellidos:"$Apellidos",Email:"$Email",Grupos:"$Grupos_miembro"     }      }   }        } ]  )




db.Usuarios_desbloqueados.find ({'Desbloqueos.Usuario_desbloqueador.Ciudad':'Madrid','Desbloqueos.Usuario_desbloqueador.Edad': {$gt: 40}},{_id: 0,"Usuario_desbloqueado.Nombre":1,"Usuario_desbloqueado.Apellidos":1,"Usuario_desbloqueado.Edad":1,}).sort ({'Usuario_desbloqueado.Edad': 1} ).explain('executionStats')

db.Usuarios_desbloqueados.createIndex({'Usuario_desbloqueado.Edad': 1,'Desbloqueos.Usuario_desbloqueador.Ciudad':1,'Desbloqueos.Usuario_desbloqueador.Edad':1}); */
