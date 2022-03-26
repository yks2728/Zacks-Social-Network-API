const router = require('express').Router();

const {
    getAllUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// GET all and Post at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserbyId)
    .put(updateUser)
    .delete(deleteUser)

// api/users/:userId/friends/:friendId

router.route('/:userId').post(addFriend);
router.route('/:userId').delete(removeFriend);

module.exports = router;


