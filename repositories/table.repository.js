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

async function getConvive(table){
    var table = await TableSchema.findOne({numero: table.numero}).exec;
    var nbConvive = table.convive ;
    return nbConvive ;
}

const tableRepository = {
    existByNumero,
    saveTable,
    getConvive
};

export default tableRepository ;