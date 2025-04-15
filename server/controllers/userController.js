//@desc set data
//@route POST /api/data
//@accesss Private

const setdata =(req, res) => {
	if(!req.body.text){
		res.status(400).json({messge:'please add atext field'})
	 //throw new Error('please add a text field')
	}

	res.status(200).json({message:'Set data'})
}
//@desc get data
//@route GET /api/data
//@accesss Private

const getdata =(req, res) => {
	res.status(200).json({message: 'Get data'})
}
//@desc update data
//@route PUT /api/data/:id
//@accesss Private

const updatedata =(req, res) => {
	res.status(200).json({message:`Update data ${req.params.id}`})
}
//@desc delete data
//@route DELETE /api/data/:id
//@accesss Private

const deletedata =(req, res) => {
	res.status(200).json({message:`Delete data ${req.params.id}`})
}

module.exports = {
	 getdata,
	 setdata,
	 updatedata,
	 deletedata,

}

