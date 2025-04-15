const express = require('express');
const router = express.Router();
const {getdata,
	setdata,
	updatedata,
	deletedata
} = require('../controllers/userController')
 router.route('/').get(getdata).post(setdata)
 router.route('/:id').put(updatedata).delete(deletedata)
  //router.get('/', getdata)
 // router.post('/', setdata)
 // router.put('/:id', updatedata)
  //router.delete('/:id',deletedata)
	module.exports = router;