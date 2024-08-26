
var frutas =[];
var verduras =[];
var congelados =[];
var dulces = [];
var articulo = "";
var categoria = "";
var editar = prompt(`¿Deseas agregar un articulo a la lista?. 
    Escribes si para agregar o escribe no para salir.`);
var indice = 0;
var opcion = ""


if(editar = "si"){

    opcion = "1"
    while( editar == "si"){

        switch(opcion){
    
            case "1":
    
                articulo = prompt("Escribe el articulo");
                categoria = prompt("Escribe la categoria: frutas, verduras, congelados, dulces.");
        
                switch(categoria){
    
                    case "frutas":
                        frutas.push(articulo);
                        console.log(frutas);
                        break
            
                    case "verduras":
                        verduras.push(articulo);
                        console.log(verduras);
                        break
            
                    case "congelados":
                        congelados.push(articulo);
                        console.log(congelados);
                        break
            
                    case "dulces":
                        dulces.push(articulo);
                        console.log(dulces);
                        break
                
                }
                break
    
            case "2":

                alert(`Lista de compras:
    
                    Frutas: ${frutas}

                    Verduras: ${verduras}

                    Congelados: ${congelados}

                    Dulces: ${dulces}

                    `);
    
                articulo = prompt("Escribe el articulo que seseas eliminar.");
                categoria = prompt("Escribe la categoria")
    
                switch(categoria){
    
                    case "frutas":
                        indice = frutas.indexOf(articulo);
                        eliminado = frutas.splice(indice,1);
                        alert(`Se elimino de la lista: ${eliminado}`);
                        break
        
                    case "verduras":
                        indice = verduras.indexOf(articulo);
                        eliminado = verduras.splice(indice,1);
                        alert(`Se elimino de la lista: ${eliminado}`);
                        break
        
                    case "congelados":
                        indice = congelados.indexOf(articulo);
                        eliminado = congelados.splice(indice,1);
                        alert(`Se elimino de la lista: ${eliminado}`);
                        break
        
                    case "dulces":
                        indice = dulces.indexOf(articulo);
                        eliminado = dulces.splice(indice,1);
                        alert(`Se elimino de la lista: ${eliminado}`);
                        break
            }
            break
    
        }

        editar = prompt("Para seguir editando la lista escribe si o escribe no para terminar");
        if(editar == "si"){

            opcion = prompt(`Presiona la opción para agregar o eliminar de la lista: 
        
                1-Agregar articulo
                2-Eliminar aerticulo`);
            
        }
        
    
    }

}
else{

    alert(`Lista de compras:
    
        Frutas: ${frutas}

        Verduras: ${verduras}

        Congelados: ${congelados}

        Dulces: ${dulces}

        `);

}


alert(`Lista de compras:
    
        Frutas: ${frutas}

        Verduras: ${verduras}

        Congelados: ${congelados}

        Dulces: ${dulces}

        `);

