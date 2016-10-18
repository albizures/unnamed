const router = require('express').Router();
const controller = require('./users.ctrl.js');
const auth = require('../../components/utils/auth.js');

router.get('/', auth.isLogin, controller.getAll);
router.get('/options', auth.isLogin, controller.getOptions);
router.get('/:id', auth.isLogin, controller.getOne);
router.post('/', auth.isLogin, controller.post);

router.delete('/:id', auth.isLogin, controller.delete);

router.put('/:id', auth.isLogin, controller.put);

module.exports = router;