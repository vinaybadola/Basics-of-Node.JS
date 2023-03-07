const apiKey = require('../middlewares/middleware');  // Here apiKey is a INDIVIDUAL LEVEL MIDDLEWARE 
const router = require('express').Router();           //if we pass it as a parameter to a particular route 
                                                     
router.use(apiKey);                 // If we use it like this and we remove the apiKey params from route "/api/products " it will be called as 
                                     // Router Level Middleware. Now it will check all the routes first and allow only authenticated user. 

router.get('/', (req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    res.render('about');
})

router.get('/api/products', apiKey, (req,res)=>{ 
    res.json([
        {
            id: 1,
            name: 'cricket'
        },
        {
            id: 2,
            name: 'football'
        }
    ])
})


module.exports = router;