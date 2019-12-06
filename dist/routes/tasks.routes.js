"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

var router = (0, _express.Router)(); //Database Connection

router.get('/getAllTasks', function _callee(req, res) {
  var db, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _database.connect)());

        case 2:
          db = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.collection('tasks').find({}).toArray());

        case 5:
          result = _context.sent;
          //Coleccion llamada tareas
          console.log(result);
          res.json(result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/insOneTask', function _callee2(req, res) {
  var db, task, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _database.connect)());

        case 2:
          db = _context2.sent;
          //console.log(req.body);
          task = {
            title: req.body.title,
            description: req.body.description
          };
          _context2.next = 6;
          return regeneratorRuntime.awrap(db.collection('tasks').insert(task));

        case 6:
          result = _context2.sent;
          res.json(result.ops[0]);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/getOneTask/:id', function _callee3(req, res) {
  var id, db, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _database.connect)());

        case 3:
          db = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(db.collection('tasks').findOne({
            _id: (0, _mongodb.ObjectID)(id)
          }));

        case 6:
          result = _context3.sent;
          //console.log(id);
          res.json(result);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router["delete"]('/delOneTask/:id', function _callee4(req, res) {
  var id, db, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _database.connect)());

        case 3:
          db = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(db.collection('tasks').deleteOne({
            _id: (0, _mongodb.ObjectID)(id)
          }));

        case 6:
          result = _context4.sent;
          res.json({
            message: "Task ".concat(id, " deleted"),
            result: result
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.put('/upOneTask/:id', function _callee5(req, res) {
  var id, updateTask, db;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          updateTask = {
            title: req.body.title,
            description: req.body.description
          };
          _context5.next = 4;
          return regeneratorRuntime.awrap((0, _database.connect)());

        case 4:
          db = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(db.collection('tasks').updateOne({
            _id: (0, _mongodb.ObjectID)(id)
          }, {
            $set: updateTask
          }));

        case 7:
          res.json({
            message: "Task ".concat(id, " Updated")
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;