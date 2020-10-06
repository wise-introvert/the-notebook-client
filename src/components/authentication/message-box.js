"use strict";
exports.__esModule = true;
exports.MessageBox = void 0;
var React = require("react");
var context_1 = require("./context");
var styles_module_scss_1 = require("./styles.module.scss");
exports.MessageBox = function (_a) {
    var className = _a.className;
    var _b = React.useState([]), errors = _b[0], setErrors = _b[1];
    var error = React.useContext(context_1.AuthenticationContext).error;
    React.useEffect(function () {
        if (error === null || error === void 0 ? void 0 : error.graphQLErrors.length) {
            error.graphQLErrors.map(function (e) {
                e.message.length &&
                    setErrors(function (old) {
                        return old.errors && old.errors.length
                            ? [old.errors, e.message]
                            : [e.message];
                    });
            });
        }
    }, [error]);
    if (error) {
        return (<span className={styles_module_scss_1["default"].messagebox + " " + (className && className)}>
        <ul>
          {errors === null || errors === void 0 ? void 0 : errors.map(function (e) { return (<li key={e}>{e}</li>); })}
        </ul>
      </span>);
    }
    return null;
};
