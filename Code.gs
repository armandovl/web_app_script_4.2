/**********tutorial */
//https://www.youtube.com/watch?v=Ju2z8J_p8VQ


var ss= SpreadsheetApp.openById("1eWwOF64Z0hB1C-wRV2RHp6CQu0te4zJ0fFwPEQduO4k");
var ws= ss.getSheetByName("Sheet1")


function doGet(){
  
    
    
    
  var data=ws.getRange(1,1,10,2).getValues();
  var listagenero=[];

    data.forEach(row=>{
      //se agrega una condicional if para que no repita duplicados
      if(listagenero.indexOf('<option>'+ row[0]+'</option>')==-1){ 
        listagenero.push('<option>'+ row[0]+'</option>');
      }

  });

/*
  data.forEach(row=>{
    listagenero.push('<option>'+ row[0]+'</option>');
  });
*/

  var tmp= HtmlService.createTemplateFromFile("index");
  tmp.generoTemp=listagenero;
  var output= tmp.evaluate();

  return output;
}

function buscarNombresPorGenero(generoSeleccionadoParametro){
  var data=ws.getDataRange().getValues(); //una forma de traer todos los valores en datos
  var listaDeNombres=[];


  data.map(row=>{
    if(row[0]== generoSeleccionadoParametro){
      listaDeNombres.push(row[1]);
    }
  });

  return listaDeNombres;
}

  /*

  */




