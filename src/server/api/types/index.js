const router = require('express').Router();
const controller = require('./types.ctrl.js');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

router.post('/', controller.post);

router.delete('/:id', controller.delete);

router.put('/:id', controller.put);

module.exports = router;