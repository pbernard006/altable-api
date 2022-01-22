import mongoose from 'mongoose';

const PlatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    get: v => Math.round(v*100)/100,
    set: v => Math.round(v*100)/100,
    required: true,
  },
  quantite: {
    type: Number,
    default: 0, 
    required: true,
  }
});

const Plat = mongoose.model("plats", PlatSchema);

export default Plat ;