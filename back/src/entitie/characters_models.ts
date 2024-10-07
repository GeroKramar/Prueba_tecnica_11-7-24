import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
  name: { type: String, required: true },
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String,
  },
  location: {
    name: String,
    url: String,
  },
  image: String,
  episode: [String],
  created: { type: Date, default: Date.now },
});

export const Character = model('Character', characterSchema);

