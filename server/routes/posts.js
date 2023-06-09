// import express from 'express';

// import { getPosts, createPost, updatePost} from '../controllers/posts.js';

// const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);  // Patch is used for updating existing documents and for that we need id.

// export default router;

import express from 'express';

import { getPostsBySearch, getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id' , getPost);
// After the sign in only you can create your own post, update post, like or delete the post.
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth,  likePost);

export default router;