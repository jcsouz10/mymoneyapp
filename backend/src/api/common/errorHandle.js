const _ = require('lodash');

module.exports = (req,res,next) => {
    const bundle = res.locals.bundle;

    if(bundle.error){
        const errors = parseErrors(bundle.erros);

        res.status(500).json({errors});
        
    } else {
        next()
    }

    const parseErrors = (nodeRestfulErrors) =>{
        const errors = [];

        _.forIn(nodeRestfulErrors, error => errors.push(error.mensage))
        return errors
    }
}