const express = require('express');
const user = require('../user.model');
const connection = require("../conexion");
const { body, param, validationResult } = require('express-validator');
var router = express.Router();

router.post('/ventas', [

    body('Cliente').not().isEmpty().isString(),
    body('FechaLlegada').not().isEmpty().isString(),
    body('OC').not().isEmpty().isString(),
    body('FechaDeseada').not().isEmpty().isString(),
    body('ObservacionesVentas').not().isEmpty().isString(),

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

router.put('/factura', [
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

router.put('/cobranza', [
    body('Estado').not().isEmpty().isString(),
    body('FechaEntregado').not().isEmpty().isString(),
    body('ObservacionesCobranza').not().isEmpty().isString(),
    body('TipoCobranza').not().isEmpty().isString(),
    body('FolioInterno').not().isEmpty().isString()
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

router.post('/llegada', [
    body('FechaDe'),
    body('FechaHasta')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ success: false, err: JSON.stringify(errors) })
        return
    }
    let body = req.body;
    user.getFechaLLegada(connection, body, (data => {
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

router.post('/entregado', [
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