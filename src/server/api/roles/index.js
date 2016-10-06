const router = require('express').Router();
const controller = require('./roles.ctrl.js');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/:id/options', controller.getOptions);

router.post('/option', controller.postOption);
router.post('/', controller.post);

router.delete('/:id', controller.delete);
router.delete('/:id/option/:option', controller.deleteOption);

router.put('/:id', controller.put);
module.exports = router;