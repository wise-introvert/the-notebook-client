"use strict";
exports.__esModule = true;
exports.Logo = void 0;
var React = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
exports.Logo = function (_a) {
    var src = _a.src, className = _a.className;
    return (<img src={src} alt={"LOGO"} className={styles_module_scss_1["default"].logo + " " + (className && className)}/>);
};
