import PlatSchema from '../services/plat.model.js' ;

function getAllPlats(){
     return PlatSchema.find({});
}

const platRepository = {
    getAllPlats
};

export default platRepository ;