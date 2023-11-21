const express = require('express');
const { fetchUserById, updateUser } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router.get('/:id', fetchUserById)
      .patch('/:id', updateUser)

exports.router = router;

// the project got successfully completed and reviewed on 20 Nov 23 
// # Team VOID 
