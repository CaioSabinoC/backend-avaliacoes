const Avaliacoes = require('../models/Avaliacoes');

exports.listarAvaliacoes = async (req, res) => {
  const avaliacoes = await Avaliacoes.find();
  res.json(avaliacoes);
};

exports.listarUmaAvaliacao = async (req, res) => {
  const avaliacao = await Avaliacoes.findById(req.params.id);
  if (!avaliacao) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(avaliacao);
};

exports.criarAvaliacao = async (req, res) => {
  const avaliacao = await Avaliacoes.create(req.body);
  res.status(201).json(avaliacao);
};

exports.editarAvaliacao = async (req, res) => {
  const avaliacao = await Avaliacoes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!avaliacao) return res.status(404).json({ message: 'Registro não encontrado.' });

  res.json(avaliacao);
};

exports.deletarAvaliacao = async (req, res) => {
  const avaliacao = await Avaliacoes.findByIdAndDelete(req.params.id);
  if (!avaliacao) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json({ message: 'Registro removido com sucesso.' });
};