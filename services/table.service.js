import tableRepository from '../repositories/table.repository.js' ;

async function saveTable(numero, convive){
    var tableWithSaneNumeroExist = await tableRepository.existByNumero(numero);
    if(tableWithSaneNumeroExist){
        return {errorMessage: "Une table de même numéro existe"}
    }
    else{
        var num = tableRepository.saveTable(numero, convive);
        return {numTable: num} ;
    }
}

const tableService = {
    saveTable
} ;

export default tableService ;