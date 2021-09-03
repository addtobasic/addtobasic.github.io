const Hello =  (req, res) => {
  res.status(200).json({ text: 'Hello' });
};

export default Hello;
