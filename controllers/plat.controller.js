import platService from '../services/plat.service.js';

async function get(req, res) {
var response = await platService.getAllPlats();
    try {
         res.status(200).json(response);
    } catch (error) {
     res.status(500).send(error);
    }
}

const platController = {
    get
};

export default platController ;