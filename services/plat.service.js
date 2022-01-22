import platRepository from '../repositories/plat.repository.js';

function getAllPlats(){
    return platRepository.getAllPlats();
}

const platService = {
    getAllPlats
};

export default platService ;