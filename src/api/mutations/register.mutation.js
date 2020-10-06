"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.RegistrationMutation = void 0;
var client_1 = require("@apollo/client");
exports.RegistrationMutation = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation RegisterUser($input: UserRegistrationInput!) {\n    register(input: $input) {\n      id\n      username\n    }\n  }\n"], ["\n  mutation RegisterUser($input: UserRegistrationInput!) {\n    register(input: $input) {\n      id\n      username\n    }\n  }\n"])));
var templateObject_1;
