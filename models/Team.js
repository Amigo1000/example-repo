const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)

const Team = new mongoose.Schema({

    name: {type:String, trim:true, default: ''},
    city: {type:String, trim:true, default: ''},
    telephone: {type:String, trim:true, default: ''},
    country: {type:String, trim:true, default: ''},

})

module.exports = mongoose.model('Team', Team)