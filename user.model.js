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
    createUser: (connection, body, callback) => {
        connection.query('INSERT INTO usuarios SET Usuario = ?,Password = ?, Tipo = ?',
            [body.Usuario, body.Password, body.Tipo], (err, results) => {
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
    updateUser: (connection, body, callback) => {
        connection.query('UPDATE usuarios SET Password = ? ,Tipo = ? WHERE Usuario = ?',
            [body.Password, body.Tipo, body.Usuario], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    deleteUser: (connection, body, callback) => {
        connection.query('DELETE FROM usuarios WHERE Usuario = ?',
            [body.Usuario], (err, results) => {
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
            callback( results );
        })
    },

    getFechaEmbarcada: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FechaEmbarcada > ? && FechaEmbarcada < ?',
        [body.FechaDe, body.FechaHasta], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },

    getFechaEntregado: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FechaEntregado > ? && FechaEntregado < ?',
        [body.FechaDe, body.FechaHasta], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getPendientes: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Pendiente" || Estado = "ParcialFacturado" || Estado = "ParcialEmbarcado"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getUsuarios: (connection, body, callback)=> {
        connection.query('SELECT * FROM usuarios', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
<<<<<<< HEAD
            callback( results );
=======
            //callback({ array: null, id: results || null, success: true });
            callback(results);
>>>>>>> 24f6bef9dd896544cd97c4a234b668cca6dd96a4
        })
    },
    getFacturados: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Facturado" ', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getEmbarcados: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Embarcado"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getEntregados: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Entregado"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getEnProceso: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado != "Entregado"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    }

}

