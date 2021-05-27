var dbPerson = require('../models/person');
const { response } = require('./addPerson');

exports.delete = (req, res) =>{
    if(!req.params.id){
        res.json({
            success: false,
            msg: "Please enter all the details"
        })
    }else{
        console.log()
       // When we are working according to status
        dbPerson.findOneAndUpdate(
            {
            _id: req.params.id,
            },
            {
                $set:{
                    status: -1
                }
            }, (err, data) => {
            if(err){
                res.json({
                    success: false,
                    msg: "Persom not deleted"
                })
            }else{
                res.json({
                    success: true,
                    msg: "Person deleted"
                })
            }
        })

        //To remove data permanently
        // for single person use remove
        // for multiple person deletion use delete many
        // dbPerson.remove({
        //     _id: req.body._id
        // }, (err, data) => {
        //     if(err){
        //         response.json({
        //             success: false,
        //             msg: "Persom not deleted"
        //         })
        //     }else{
        //         res.json({
        //             success: true,
        //             msg: "Person deleted"
        //         })
        //     }
        // })
    }
}

