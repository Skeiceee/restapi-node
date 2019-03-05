const { Router } = require('express'); 
const router = Router();

router.get('/',(req, res) =>{
    const data = {
        'status': 'ok'
    }
    res.send(data);
});

module.exports = router;