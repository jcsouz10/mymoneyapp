module.exports = (res,req,next) => {
    res.header("Access-Controll-Allow-Origin", "*"),
    res.header("Access-Controll-Allow-Methods","POST","PUT","DELETE","PATCH","OPTIONS","GET"),
    res.header("Access-Controll-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}