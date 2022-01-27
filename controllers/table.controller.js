import tableService from '../services/table.service.js'

async function addTable(req, res){
    var response = await tableService.saveTable(req.body.numero, req.body.convive);
    if(response.errorMessage != null){
        res.status(412).json({message: response.errorMessage})
    }
    else{
        res.status(201).json({numTable: response.numTable})
    }
}

const tableController = {
    addTable
}

export default tableController ;