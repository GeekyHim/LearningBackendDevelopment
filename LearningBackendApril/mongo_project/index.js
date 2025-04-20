// mongoose module ko le aye
const mongoose = require('mongoose');
const studentModel = require('./models/student.model1')  // this is a module 

// code to connect to mongoDB
// mongoose.connect('url')
// where to connect
mongoose.connect('mongodb://localhost/be_demodb') // localhost -> 127.0.0.1

// start the connection with mongoDB 
// i.e. ordering to connect 
// possible outcomes = fail -> error, success
const db = mongoose.connection

// on error
db.on("error", ()=> {
    console.log("Error while connecting to the Server")
});

// successful connection
db.once("open", ()=> {
    console.log("Connected to MongoDB")

    // LOGIC to insert data in DB
    init() // inserts data / intialization 

    // Running the Queries on MongoDB
    dbQueries() 

});

async function init(){
    // logic to insert data in DB 
    const student = { 
        // student object
        name : "KOI STUDENT",
        age : 21,
        email : 'somtthinf@GMAIL.COM',
        subjects : ['Computer Science', 'Maths']

    }
    // need to wait at this step.
    const std_obj = await studentModel.create(student)

    console.log(std_obj)
}


async function dbQueries(){
    // Read the student data 
    console.log("Inside dbQueries func")
    // Read student data based on id 
    // let id -> 67ed992fa702ddb99c68dc3f
    
    // try{
    //     const mystudent = await studentModel.findById('67ed992fa702ddb99c68dc3f') 
    //     console.log(mystudent)
    // } catch(error) {
    //     console.log("ERROR IS",error)
    // }

    // based on name   --- > JSON TYPE ME SERACH KAR LIA
    // try{
    //     const mystudent = await studentModel.find({name : "GUPTA"})
    //     console.log(mystudent)
    // } catch(err) {
    //     console.log("THE ERROR IS : " + err)

    // }
    // try{
    //         const mystudent = await studentModel.findOne({name : "GUPTA"})
    //         console.log(mystudent)
    //     } catch(err) {
    //         console.log("THE ERROR IS : " + err)
    
    //     }

    // to find one -> use "findOne"

    //multiple conditions
    // try{
    // const myData = await studentModel.where("age").gte('10').where('name').equals('Himanshu').limit(2)
    // console.log(myData)
    // } catch (err){
    //     console.log("ERROR : " + err)
    // }


    // dELETE a RECOERD

    try{
        const dataTBD = await studentModel.deleteOne({name : 'Himanshu'})
    console.log(dataTBD)
    }catch(err){
        console.log("ERROR IS : " +err)
    }
}


