// Example controllers — keep logic here (no real DB for Module 2)
const getAllPosts = (req, res, next) => {
  try {
    const sample = [
      { id: 1, title: 'Hello Blogify' },
      { id: 2, title: 'Module 2 Integration' }
    ];
    return res.status(200).json({
      success: true,
      data: { posts: sample }
    });
  } catch (err) {
    next(err);
  }
};

const getPostById = (req, res, next) => {
  try {
    const { id } = req.params;
    // sample response
    return res.status(200).json({
      success: true,
      data: { post: { id, title: `Post ${id}` } }
    });
  } catch (err) {
    next(err);
  }
};

const createPost = (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({
        success: false,
        error: { message: 'Title is required' }
      });
    }
    const newPost = { id: Math.floor(Math.random() * 1000), title };
    return res.status(201).json({
      success: true,
      data: { post: newPost }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};
