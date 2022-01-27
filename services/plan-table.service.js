import tableRepository from "../repositories/table.repository.js";
import planTableRepository from "../repositories/plan-table.repository.js";

async function savePlanTable(name, table){
    var planTableWithSameNameExist = await planTableRepository.existByName(name);
    var errorMessage = "" ;

    if(planTableWithSameNameExist){
        errorMessage = "Un plan de table du même nom existe déjà.";
    }
    for (let i = 0; i < table.length ; i++){
        var nbConvive = await tableRepository.getConvive(table[i].numero);
        console.log(nbConvive);
        if(nbConvive == 0){
            console.log("on passe dedans");
            errorMessage += " La table " + table[i].numero+ " n'a aucun convive";
        }
    }
    
    if(errorMessage != ""){
        return {errorMessage: errorMessage};
    }else{
        var id = await planTableRepository.savePlanTable(name, table);
        return {planTableId: id};
    }
}

const planTableService = {
    savePlanTable
};

export default planTableService ;