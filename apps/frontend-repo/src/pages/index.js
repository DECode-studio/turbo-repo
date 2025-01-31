"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var UserForm_1 = require("../components/UserForm");
var UserTable_1 = require("../components/UserTable");
var user_1 = require("@/service/model/user");
var Home = function () {
    var _a = (0, react_1.useState)(new user_1.default()), user = _a[0], setUser = _a[1];
    return (<material_1.Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'flex-start',
            padding: 2,
            backgroundColor: 'white'
        }}>
      <material_1.Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <material_1.Typography variant="h4" align="center" gutterBottom color='black'>
          User Management
        </material_1.Typography>
        <UserForm_1.default userToEdit={user}/>
        <UserTable_1.default setUser={setUser}/>
      </material_1.Container>
    </material_1.Box>);
};
exports.default = Home;
