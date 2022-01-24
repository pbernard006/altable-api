import TableSchema from '../services/table.model.js'

async function existByNumero(numero){
    const table = await TableSchema.findOne({numero: numero}).exec();
    if(table != null){
        return true ;
    }
}

function saveTable(numero, convive){
    const newTable = new TableSchema({
        numero: numero,
        convive: convive
    });
    newTable.save();
    return newTable.numero ;
}

const tableRepository = {
    existByNumero,
    saveTable
};

export default tableRepository ;