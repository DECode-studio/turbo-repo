"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../store/actions");
var material_1 = require("@mui/material");
var UserTable = function (_a) {
    var setUser = _a.setUser;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, react_redux_1.useSelector)(function (state) { return state.user; }), users = _b.users, loading = _b.loading, error = _b.error;
    (0, react_1.useEffect)(function () {
        dispatch((0, actions_1.fetchUsers)());
    }, [dispatch]);
    var handleDelete = function (idUser) {
        dispatch((0, actions_1.removeUser)(idUser));
    };
    var selectUser = function (user) {
        setUser(user);
    };
    if (loading)
        return <material_1.CircularProgress sx={{ display: 'block', margin: 'auto', paddingTop: '20px' }}/>;
    if (error)
        return <material_1.Typography color="error" align="center">Error: {error}</material_1.Typography>;
    return (<material_1.TableContainer component={material_1.Paper} sx={{ marginTop: 2, boxShadow: 3 }}>
      <material_1.Table>
        <material_1.TableHead>
          <material_1.TableRow>
            <material_1.TableCell align="center">ID</material_1.TableCell>
            <material_1.TableCell align="center">Name</material_1.TableCell>
            <material_1.TableCell align="center">Email</material_1.TableCell>
            <material_1.TableCell align="center">Contact</material_1.TableCell>
            <material_1.TableCell align="center">Actions</material_1.TableCell>
          </material_1.TableRow>
        </material_1.TableHead>
        <material_1.TableBody>
          {users.map(function (user) { return (<material_1.TableRow key={user.idUser}>
              <material_1.TableCell align="center">{user.idUser}</material_1.TableCell>
              <material_1.TableCell align="center">{user.nameUser}</material_1.TableCell>
              <material_1.TableCell align="center">{user.emailUser}</material_1.TableCell>
              <material_1.TableCell align="center">{user.contactUser}</material_1.TableCell>
              <material_1.TableCell align="center">
                <material_1.Box sx={{
                display: 'flex',
                gap: 1, // Jarak antara tombol
                marginBottom: 1, // Margin bawah untuk row
            }}>
                  <material_1.Button variant="contained" color="warning" onClick={function () { return selectUser(user); }} sx={{
                padding: 1,
            }}>
                    Select
                  </material_1.Button>

                  <material_1.Button variant="contained" color="error" onClick={function () { var _a; return handleDelete((_a = user.idUser) !== null && _a !== void 0 ? _a : ''); }} sx={{
                padding: 1,
            }}>
                    Delete
                  </material_1.Button>
                </material_1.Box>
              </material_1.TableCell>
            </material_1.TableRow>); })}
        </material_1.TableBody>
      </material_1.Table>
    </material_1.TableContainer>);
};
exports.default = UserTable;
