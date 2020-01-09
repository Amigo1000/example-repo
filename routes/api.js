// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Profile = require('../models/Profile')
const Team = require('../models/Team')

/*  This is a sample API route. */

router.get('/profile', (req, res) => {
	let filters = req.query
    if (req.query.age != null){
		filters = {
			age: {$gt: req.query.age -1}
		}
	}
    Profile.find(filters)
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/profile/:id', (req, res) => {
	const id =req.params.id

	Profile.findById(id)
	.then(profile => {
		res.json({
			confirmation: 'succes',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Profile ' + id + 'not found!'
		})
	})

})

router.post('/profile', (req, res) => {

	Profile.create(req.body)
	.then(profile => {
		res.json({
			confirmation: 'succes',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail!',
			message: err.message
		})

	})
})

router.get('/team', (req, res) => {
	const query = req.query

	Team.find(query)
	.then(team => {
		res.json({
			confirmation: 'succes',
			data: team

		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failed!',
			message: err.message
		})

	})

})

router.post('/team', (req, res) => {

	Team.create(req.body)
	.then(team => {
		res.json({
			confirmation: 'succes',
			data: team
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail!',
			message: err.message
		})
	})

	res.json({
		confirmation: 'succes',
		data: req.body
	})

})




module.exports = router
