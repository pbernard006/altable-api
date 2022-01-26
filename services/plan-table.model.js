import mongoose from 'mongoose' ;
import Table from "./plat.model.js" ;

const PlanTableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    table: [Table.schema]
});

const PlanTable = mongoose.model("plan table", PlanTableSchema);

export default PlanTable ;