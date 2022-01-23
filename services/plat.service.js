import platRepository from '../repositories/plat.repository.js';
import Plat from './plat.model.js';

function getAllPlats(){
    return platRepository.getAllPlats();
}

async function savePlat(name, description, type, prix, quantite){
    var platWithSameNameExist = await platRepository.existByName(name);
    if(platWithSameNameExist){
        return {errorMessage : "Un plat du même nom existe déjà"};
    }
    else{
        var id = platRepository.savePlat(name, description, type, prix, quantite)
        return {
            platId: id
        }
    }
}

async function editPlat(name, quantite){
    var editedPlat = await platRepository.editPlat(name, quantite);
    if(editedPlat != null){
        return { platName: name,
        platQuantite: quantite}
    }else{
        return {errorMessage: "Le plat n'existe pas"}
    }
}

const platService = {
    getAllPlats,
    savePlat,
    editPlat
};

export default platService ;