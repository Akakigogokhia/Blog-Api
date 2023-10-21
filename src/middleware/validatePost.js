const validatePost = (req, res, next) => {
  const { title, description, category } = req.body;
  const trimmedName = category?.name.trim();

  if (!title || !description || !category) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  if (title.length > 100 || description.length > 1000) {
    return res.status(400).json({ msg: 'Title or description is too long' });
  }

  if (!trimmedName) return res.status(422).send({ msg: 'Invalid name' });

  next();
};

module.exports = {
  validatePost,
};
