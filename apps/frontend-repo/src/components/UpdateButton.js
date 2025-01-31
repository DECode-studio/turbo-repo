"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var UpdateButton = function (_a) {
    var onClick = _a.onClick;
    return (<material_1.Button variant="contained" color="secondary" onClick={onClick}>
      Update
    </material_1.Button>);
};
exports.default = UpdateButton;
