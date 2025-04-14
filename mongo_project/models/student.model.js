// Define Schema of Student Collection to be stored in the database
const mongoose = require('mongoose')

//Schema
const studentSchema = new mongoose.Schema({
    name : String,  // datatypes of js are used here (not the db dataytpes)
    age : Number
})

// go ahead and create coresponding collection in db 
module.exports = mongoose.model('Student', studentSchema)
// Student -> Name of Collection  
// studentSchema -> Actual defined schema
// convert into module (moudel is available across project)



/**     STEPS:  
 * 1. Require Schema
 * 2. Schema Definining
 * 3. Creating the collection
 * 4. Convert into module 
 */

