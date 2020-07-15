module.exports = {

    create: (connection, body, callback) => {
        connection.query('INSERT INTO pedidos SET Cliente = ?,Estado = "PendienteAutorizar", FechaLlegada = ?,OC = ?, FechaDeseada = ?, ObservacionesVentas = ?,RCVentas = current_timestamp()',
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
    updateSurtido: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ? ,Surtidor = ? WHERE FolioInterno = ?',
            [body.Estado, body.Surtidor, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    updateParcialEmbarcado: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ?, ObservacionesAlmacen = ? , FechaEmbarcada = ? ,Chofer  = ? ,Embarcador = ? ,Surtidor = ? WHERE FolioInterno = ?',
            [body.Estado ,body.ObservacionesAlmacen,body.FechaEmbarcada, body.Chofer, body.Embarcador, body.Surtidor, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    updateCobranza: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ?, TipoCobranza = ?, ObservacionesCobranza = ?, RCCobranza = current_timestamp(), FechaEntregado = ?  WHERE FolioInterno = ?',
            [ body.Estado, body.TipoCobranza, body.ObservacionesCobranza, body.FechaEntregado, body.FolioInterno], (err, results) => {
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
        connection.query('SELECT * FROM pedidos WHERE Estado = "PendienteAutorizar" || Estado = "ParcialFacturado" || Estado = "ParcialEmbarcado"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getporAutorizar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "PendienteAutorizar" ', (err, results) => {
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
            //callback({ array: null, id: results || null, success: true });
            callback(results);
        })
    },
    getporFacturar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Autorizado" || Estado = "ParcialFacturado || Estado = "ParcialFac-ParcialEmb" || Estado = "ParcialFac-ParcialEnt || Estado = "ParcialFact-Surtido""', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getporEmbarcar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Facturado" || Estado = "Surtido" || Estado = "ParcialEmbarcado" || Estado = "ParcialFacturado" || Estado = "ParcialFac-ParcialEmb" || Estado = "ParcialFact-Surtido"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getporEntregar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Embarcado" || Estado = "ParcialEmbarcado"  || Estado = "ParcialEmbarcado-NE" || Estado = "Embarcado-NE"', (err, results) => {
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
    },
    autorizacion: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ?, RCAutorizado = current_timestamp()  WHERE FolioInterno = ?',
            [body.Estado, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    }

}

