const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send({title: 'Mi primera Imgen de docker', fecha: '26-abri-2022'})
})

module.exports = router;