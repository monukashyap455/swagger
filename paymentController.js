const Razorpay = require("razorpay");
const uniquId = require("uniqid")


var instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
});

module.exports.createOrder = (req, res) => {
 
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: uniquId()
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        res.send(order)
    });

}
module.exports.paymentCallback =(req,res)=>{
    
}