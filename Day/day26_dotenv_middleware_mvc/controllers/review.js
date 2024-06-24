const review = require("../models/review");



const addDataController = async (req, res) => {
    console.log("addDataController called");
    const reviewId = req.body.reviewId;
    const userId = req.body.userId;
    const productId = req.body.productId;
    const reviewText = req.body.reviewText;

    if(!reviewId || !userId || !productId){
        res.status(403).send("reviewId, userId & productId are required");
        return;
    }

    const user = review.find((item) => item.userId === userId);
  if(user){
    res.status(401).send("User alreay Persent");
    return;
  }
    
    review.push({
        reviewId,
        userId,
        productId,
        reviewText,
    });

    res.status(200).json({
        reviewId,
        userId,
        productId,  
    });
    
};

const getDataController = async (req, res) => {
    const productId = req.params.productId;

    if(!productId){
        res.status(403).send("ProductId is required")
    }

    const user = review.find(item => item.productId == productId);

    res.status(200).json(user);
}

module.exports = {
    addDataController,
    getDataController,
};