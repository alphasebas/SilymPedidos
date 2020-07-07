module.exports = {

    create: (connection, body, callback) => {
        connection.query('INSERT INTO pedidos SET Cliente = ?,Estado = "Pendiente", FechaLlegada = ?,OC = ?, FechaDeseada = ?, ObservacionesVentas = ?,RCVentas = current_timestamp()',
            [body.Cliente, body.FechaLlegada, body.OC, body.FechaDeseada, body.ObservacionesVentas], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },

    updateFactura: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ? ,Factura = ? ,RCFactura  = current_timestamp() WHERE FolioInterno = ?',
            [body.Estado, body.Factura, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    updateAlmacen: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ? ,FechaEmbarcada = ? ,Chofer  = ? ,Embarcador = ? ,Surtidor = ? WHERE FolioInterno = ?',
            [body.Estado, body.FechaEmbarcada, body.Chofer, body.Embarcador, body.Surtidor, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    updateCobranza: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ? ,FechaEntregado = ? ,ObservacionesCobranza  = ? ,RCCobranza = current_timestamp() ,TipoCobranza = ? WHERE FolioInterno = ?',
            [body.Estado, body.FechaEntregado, body.ObservacionesCobranza, body.TipoCobranza, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },

    getFechaLLegada: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FechaLlegada > ? && FechaLLegada < ?',
        [body.FechaDe, body.FechaHasta], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: results || null, success: true });
        })
    },

    getFechaEmbarcada: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FechaEmbarcada > ? && FechaEmbarcada < ?',
        [body.FechaDe, body.FechaHasta], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: results || null, success: true });
        })
    },

    getFechaEntregado: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FechaEntregado > ? && FechaEntregado < ?',
        [body.FechaDe, body.FechaHasta], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: results || null, success: true });
        })
    },

}

