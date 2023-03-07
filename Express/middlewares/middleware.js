function apiKey (req,res,next){

    //Here if we the api_Key we write in url doesn't match with our  prebuilt apiKey we
    // will show error otherwise we'll show the data   
    const apiKey = '1234';
    if(req.query.api_key && (req.query.api_key == apiKey)){
        next();
    }else{
        res.json({
            msg: 'Invalid Authentication..'
        })
    }
    
}

module.exports = apiKey

// To Run this challenge go to localhost:3000/api/products?api_key=1234