const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const timestamp = Math.floor(Date.now() / 1000);

    const newPost = await Post.create({
      title,
      description,
      category,
      timestamp,
    });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Oops.. Something went wrong' });
  }
};
