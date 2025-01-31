"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../store/actions");
var user_1 = require("@/service/model/user");
var material_1 = require("@mui/material");
var UserForm = function (_a) {
    var _b, _c, _d, _e;
    var userToEdit = _a.userToEdit;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _f = (0, react_1.useState)(new user_1.default((_b = userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.idUser) !== null && _b !== void 0 ? _b : '', (_c = userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.nameUser) !== null && _c !== void 0 ? _c : '', (_d = userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.emailUser) !== null && _d !== void 0 ? _d : '', (_e = userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.contactUser) !== null && _e !== void 0 ? _e : '')), user = _f[0], setUser = _f[1];
    var handleChange = function (e) {
        var _a;
        setUser(user_1.default.fromObject(__assign(__assign({}, user), (_a = {}, _a[e.target.name] = e.target.value, _a))));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (userToEdit) {
            dispatch((0, actions_1.updateUser)(user));
        }
        else {
            dispatch((0, actions_1.createUser)(user));
        }
        setUser(new user_1.default('', '', '', ''));
    };
    (0, react_1.useEffect)(function () {
        if (userToEdit) {
            setUser(userToEdit);
        }
    }, [userToEdit]);
    return (<material_1.Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <material_1.Typography variant="h6" gutterBottom>
        {userToEdit ? 'Edit User' : 'Create User'}
      </material_1.Typography>
      <form onSubmit={handleSubmit} noValidate>
        <material_1.Grid container spacing={2}>
          <material_1.Grid item xs={12}>
            <material_1.TextField fullWidth label="Name" name="nameUser" value={user.nameUser} onChange={handleChange} required variant="outlined" size="small"/>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.TextField fullWidth label="Email" name="emailUser" value={user.emailUser} onChange={handleChange} required variant="outlined" size="small"/>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.TextField fullWidth label="Contact" name="contactUser" value={user.contactUser} onChange={handleChange} required variant="outlined" size="small"/>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Button 
    // type="submit"
    fullWidth variant="contained" color="primary" sx={{ padding: 1.5 }} onClick={handleSubmit}>
              {userToEdit ? 'Update User' : 'Create User'}
            </material_1.Button>
          </material_1.Grid>
        </material_1.Grid>
      </form>
    </material_1.Box>);
};
exports.default = UserForm;
