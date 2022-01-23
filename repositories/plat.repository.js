import PlatSchema from '../services/plat.model.js' ;

function getAllPlats(){
     return PlatSchema.find({});
}

async function existByName(name){
    const plats = await PlatSchema.findOne({name: name}).exec();
    if(plats != null){
        return true ;
    }
}

function savePlat(name, description, type, prix, quantite){
    const newPlat = new PlatSchema({
        name: name,
        description: description,
        type: type,
        prix: prix,
        quantite: quantite
    })
    newPlat.save();
    return newPlat.id ;
}

const platRepository = {
    getAllPlats,
    existByName,
    savePlat
};

export default platRepository ;