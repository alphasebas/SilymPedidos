const express = require('express');
const user = require('../user.model');
const connection = require("../conexion");
const { body, param, validationResult } = require('express-validator');
var router = express.Router();

router.post('/ventas', [

    body('Cliente').not().isEmpty().isString(),
    body('FechaLlegada').not().isEmpty().isString(),
    body('OC'),
    body('FechaDeseada').not().isEmpty().isString(),
    body('ObservacionesVentas'),
    body('Atendido').not().isEmpty().isString()

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.create(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/compras', [

    body('Cliente'),
    body('ProvMarca').not().isEmpty().isString(),
    body('Tipo'),
    body('FechaDeseada').not().isEmpty().isString(),
    body('Producto'),
    body('Atendido').not().isEmpty().isString()

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.create2(connection, body, (data => {
        res.json(data);
    }))
});

router.post('/factura', [
    body('Estado').not().isEmpty().isString(),
    body('Factura').not().isEmpty().isString(),
    body('FolioInterno').not().isEmpty().isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateFactura(connection, body, (data => {
        res.json(data);
    }))
});

router.put('/almacen', [
    body('Estado').not().isEmpty().isString(),
    body('FechaEmbarcada').not().isEmpty().isString(),
    body('Chofer').not().isEmpty().isString(),
    body('Embarcador').not().isEmpty().isString(),
    body('Surtidor').not().isEmpty().isString(),
    body('FolioInterno').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateAlmacen(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/parcialembarcado', [
    body('Estado').not().isEmpty().isString(),
    body('ObservacionesAlmacen'),
    body('FechaEmbarcada').not().isEmpty().isString(),
    body('Chofer').not().isEmpty().isString(),
    body('Embarcador').not().isEmpty().isString(),
    body('Surtidor').not().isEmpty().isString(),
    body('FolioInterno').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateParcialEmbarcado(connection, body, (data => {
        res.json(data);
    }))
});

router.post('/autorizacion', [
    body('Estado').not().isEmpty().isString(),
    body('AutorizadoPor'),
    body('FolioInterno').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.autorizacion(connection, body, (data => {
        res.json(data);
    }))
});

router.post('/cobranza', [
    body('FolioInterno').not().isEmpty().isString(),
    body('TipoCobranza').not().isEmpty().isString(),
    body('ObservacionesCobranza'),
    body('FechaEntregado'),
    body('Estado').not().isEmpty().isString(),

    
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateCobranza(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/proceso', [
    body('FolioInterno').not().isEmpty().isString(),
    body('Estado').not().isEmpty().isString(),
    
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateenProceso(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/modifbuscar', [
    body('FolioInterno').not().isEmpty().isString(),    
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.modifbuscar(connection, body, (data => {
        res.json(data);
    }))
});

router.post('/surtido', [
    body('Surtidor'),
    body('Estado'),
    body('FolioInterno')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateSurtido(connection, body, (data => {
        res.json(data);
    }))
});

router.post('/surtidoen', [
    body('FechaDe'),
    body('FechaHasta')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getFechaEmbarcada(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/embarcada', [
    body('FechaDe'),
    body('FechaHasta')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getFechaEmbarcada(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/usuarios', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getUsuarios(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/pendientes', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getPendientes(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/porautorizar', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getporAutorizar(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/createuser', [
    body('Usuario').not().isEmpty().isString(),
    body('Password').not().isEmpty().isString(),
    body('Tipo').not().isEmpty().isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.createUser(connection, body, (data => {
        res.json(data);
    }))
});
router.put('/edituser', [
    body('Usuario').not().isEmpty().isString(),
    body('Password').not().isEmpty().isString(),
    body('Tipo').not().isEmpty().isString()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.updateUser(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/borraruser', [
    body('Usuario').not().isEmpty().isString(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.deleteUser(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/porfacturar', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getporFacturar(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/porembarcar', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getporEmbarcar(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/porentregar', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getporEntregar(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/enproceso', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getEnProceso(connection, body, (data => {
        res.json(data);
    }))
});
router.get('/todosClientes', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getTodosClientes(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/folio', [
    body('FolioInterno')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getFolio(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/cliente', [
    body('Cliente')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getCliente(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/addcliente', [
    body('Cliente')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.addCliente(connection, body, (data => {
        res.json(data);
    }))
});
router.post('/fechasentregados', [
    body('FechaDe'),
    body('FechaHasta')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getFechaEntregado(connection, body, (data => {
        res.json(data);
    }))
});


module.exports = router;