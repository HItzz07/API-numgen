const express = require('express')
const router = express.Router();
// const Joi = require('joi')

var hash= {}
let cnt = 0;
const maxVal = 9000000000000;
const minVal = 1000000000000;

router.get('/' , (req,res,next) => {
    res.status(200).json({
        message: 'Handling requests now for GET',
    });
});


// router.post('/' , (req,res,next) => {
//     res.status(201).json({
//         message: 'Handling requests now for POST'
//     });
// });


router.get('/:n' ,(req,res,next) => {
    let arr = []
    const N = parseInt(req.params.n);

    if(N > 10000000) res.status(400).json({
        message:"This length is very huge , Can't Allocate that much memory to array"})
    else {

        for(let i = 0;i<N;i++){
            let r = Math.floor(minVal + Math.random() * maxVal)
            // let r = Math.floor(10 + Math.random() * 90)
            if(cnt == maxVal){
                res.status(400).json({
                    message: "No More Unique values in the range"
                })
                break;
            }
            if(hash[r] === true)i--;
            else {
                arr[i] = r;
                hash[r] = true;    
                cnt++;
            }
        }
        res.status(201).send(arr);
    }
})




module.exports = router;
