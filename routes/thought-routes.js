const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtbyId,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');


// api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
//api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId').post(createReaction);
router.route('/:thoughtId').delete(deleteReaction);


    
module.exports = router;