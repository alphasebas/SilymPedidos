module.exports = {

    create: (connection, body, callback) => {
        connection.query('INSERT INTO pedidos SET Cliente = ?,Estado = "PendienteAutorizar", FechaLlegada = ?,OC = ?, FechaDeseada = ?, ObservacionesVentas = ?, Atendido = ?,RCVentas = current_timestamp()',
            [body.Cliente, body.FechaLlegada, body.OC, body.FechaDeseada, body.ObservacionesVentas, body.Atendido], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    create2: (connection, body, callback) => {
        connection.query('INSERT INTO compras SET Cliente = ?,Estado = "Pendiente", ProvMarca = ?,Tipo = ?, FechaDeseada = ?,Productos = ?, PedidoPor = ?,RCPedido = current_timestamp()',
            [body.Cliente, body.ProvMarca, body.Tipo, body.FechaDeseada, body.Producto, body.Atendido], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    
    addCliente: (connection, body, callback) => {
        connection.query('INSERT INTO clientes SET Cliente = ?',
            [body.Cliente], (err, results) => {
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
    updateenProceso: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = ? WHERE FolioInterno = ?',
            [ body.Estado, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    },
    modifbuscar: (connection, body, callback) => {
        connection.query('UPDATE pedidos SET Estado = "Modificar" WHERE FolioInterno = ?',
            [body.FolioInterno], (err, results) => {
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
    getFolio:(connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE FolioInterno = ? ',
        [body.FolioInterno], (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getTodosClientes:(connection, body, callback) => {
        connection.query('SELECT * FROM clientes', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            //callback({ array: null, id: results || null, success: true });
            callback(results);
        })
    },
    getCliente:(connection, body, callback) => {
      connection.query('SELECT * FROM pedidos WHERE Cliente = ? ',
      [body.Cliente], (err, results) => {
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
        connection.query('SELECT * FROM pedidos WHERE Estado = "Autorizado" || Estado = "ParcialFact" || Estado = "ParcialFact-ParcialEmb" || Estado = "ParcialFact-NE" || Estado = "ParcialFact-Ent" || Estado = "ParcialFact-Surtido" || Estado = "ParcialFact-ParcialEmb" || Estado = "ParcialFact-ParcialEmb-NE" || Estado = "ParcialFact-ParcialEmb-Ent"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getporEmbarcar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Facturado" || Estado = "Surtido" || Estado = "ParcialFact" || Estado = "NoEntregado" || Estado = "ParcialFact-NE" || Estado = "ParcialEmb-Ent" || Estado = "ParcialEmb-NE" || Estado = "ParcialFact-ParcialEmb-NE" || Estado = "ParcialFact-Surtido" || Estado = "ParcialFact-ParcialEmb-Ent"', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    },
    getporEntregar: (connection, body, callback) => {
        connection.query('SELECT * FROM pedidos WHERE Estado = "Embarcado" || Estado = "ParcialEmb" || Estado = "ParcialFact-Emb" || Estado = "ParcialFact-ParcialEmb"', (err, results) => {
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
        connection.query('UPDATE pedidos SET Estado = ?, AutorizadoPor = ? , RCAutorizado = current_timestamp()  WHERE FolioInterno = ?',
            [body.Estado, body.AutorizadoPor, body.FolioInterno], (err, results) => {
                if (err) {
                    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                    return;
                }
                callback({ array: null, id: null, success: true });
            });
    }

}

