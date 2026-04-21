const mongoose = require('mongoose');

const avaliacoesSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descricao: { type: String, required: true, trim: true },
    happenedAt: { type: Date, required: true },
    nome: {type: String, required: true},
    estrelas: { type: Number, required: true, min: 1, max: 5 }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Avaliacoes', avaliacoesSchema);