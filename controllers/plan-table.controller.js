import planTableService from "../services/plan-table.service.js"

async function addPlanTable(req, res){
    var response = await planTableService.savePlanTable(req.body.name, req.body.table);
    if(response.errorMessage != null){
        res.status(412).json({message : errorMessage});
    }
    else{
        res.status(201).json({planTableId : id})
    }
}

const planTableController = {
    addPlanTable
};

export default planTableController ;