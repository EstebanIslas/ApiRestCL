"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Conexion a la DB
//Se crea una funcion asincrona de conexion de DB
function connect() {
  var client, db;
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongodb["default"].connect('mongodb://localhost:27017', {
            useUnifiedTopology: true
          }));

        case 3:
          client = _context.sent;
          db = client.db('carlot');
          console.log('The Db has been conected');
          return _context.abrupt("return", db);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}