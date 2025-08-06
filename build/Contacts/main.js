"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactManager_1 = __importDefault(require("./ContactManager/ContactManager"));
let contactManager = new ContactManager_1.default();
contactManager.init();
