"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var store_1 = require("@/store/store");
require("@/styles/globals.css");
var react_redux_1 = require("react-redux");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<react_redux_1.Provider store={store_1.default}>
      <Component {...pageProps}/>
    </react_redux_1.Provider>);
}
