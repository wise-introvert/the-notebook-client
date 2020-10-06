"use strict";
exports.__esModule = true;
exports.Form = void 0;
var React = require("react");
var context_1 = require("./context");
var styles_module_scss_1 = require("./styles.module.scss");
exports.Form = function (_a) {
    var className = _a.className;
    var _b = React.useContext(context_1.AuthenticationContext), username = _b.username, setUsername = _b.setUsername, password = _b.password, setPassword = _b.setPassword;
    return (<form className={styles_module_scss_1["default"].form + " " + (className && className)}>
      <input placeholder={"Username"} onChange={function (e) {
        setUsername(e.target.value);
    }} name={"username"} id={"username"} value={username}/>
      <input placeholder={"Password"} onChange={function (e) {
        setPassword(e.target.value);
    }} name={"password"} id={"password"} type={"password"} value={password}/>
    </form>);
};
