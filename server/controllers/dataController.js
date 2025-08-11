let dataStore = [];

const saveData = (req, res) => {
  const { cartao, mesa, usuario } = req.body;

  if (!cartao || !mesa || !usuario) {
    return res.status(400).send('Dados incompletos');
  }

  const newData = { cartao, mesa, usuario };
  dataStore.push(newData);
  console.log('Dados recebidos:', newData);
  return res.status(200).json({ message: 'Dados salvos com sucesso!', data: newData });
};

const getData = (req, res) => {
  res.status(200).json(dataStore);
};

module.exports = { saveData, getData };
