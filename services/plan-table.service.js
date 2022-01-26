import tableRepository from "../repositories/table.repository.js";
import planTableRepository from "../repositories/plan-table.repository.js";

async function savePlanTable(name, table){
    var planTableWithSameNameExist = await planTableRepository.existByName(name);
    var nbConvive = await tableRepository.getConvive(table);
    var errorMessage = "" ;

    if(planTableWithSameNameExist){
        errorMessage = "Un plan de table du même nom existe déjà.";
    }
    if(nbConvive == 0){
        errorMessage += " Cette table n'a aucun convive";
    }
    if(errorMessage != ""){
        return {errorMessage: errorMessage};
    }else{
        var id = planTableRepository.savePlanTable(name, table);
        return {planTableId: id}
    }
}

const planTableService = {
    savePlanTable
};

export default planTableService ;