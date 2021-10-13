const hello = (req, res) => {
  res.status(200).json({ text: 'Hello' });
};

export default hello;
