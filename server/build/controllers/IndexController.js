"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Saludos desde controlador');
    }
}
exports.indexController = new IndexController();
