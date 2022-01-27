import PlanTable from "../services/plan-table.model.js"

async function existByName(name){
    const planTable = await PlanTable.findOne({name: name}).exec();
    if(planTable != null){
        return true ;
    }
}

async function savePlanTable(name, table){
    const newPlanTable = new PlanTable({
        name: name,
        table: table
    })
    newPlanTable.save();
    return newPlanTable.id ;
}

const planTableRepository = {
    existByName,
    savePlanTable
}

export default planTableRepository ;