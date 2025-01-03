"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebdev_exam"]("app",{

/***/ "./src/ExamPart1.tsx":
/*!***************************!*\
  !*** ./src/ExamPart1.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PersonList = exports.fetchPersons = exports.PersonForm = exports.PersonCard = void 0;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n// Question 1\nconst PersonCard = (props) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { children: (0, jsx_runtime_1.jsxs)(\"p\", { children: [props.role == \"student\" ? \"🎓 \" : props.role == \"teacher\" ? \"🏫 \" : \"🏢 \", props.name, props.role == \"student\" ? \" | Grade: \" + props.grade : props.role == \"teacher\" ? \" | Subject \" + props.subject : \" | Department: \" + props.department] }) }) }));\nexports.PersonCard = PersonCard;\n// Question 2\nclass PersonForm extends React.Component {\n    constructor(props) {\n        super(props);\n        let val;\n    }\n    onChange = () => {\n    };\n    render() {\n        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"input\", { placeholder: \"Name\", value: this.val, onChange: this.onChange }) }));\n    }\n}\nexports.PersonForm = PersonForm;\n/*\nHint for the Dropdown list\n<select\n    onChange={}\n>\n    <option value=\"student\">Student</option>\n    <option value=\"teacher\">Teacher</option>\n    <option value=\"staff\">Staff</option>\n</select>\n*/\n// Question 3\nconst fetchPersons = async () => {\n    return {};\n};\nexports.fetchPersons = fetchPersons;\n// Question 4\nclass PersonList extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return ((0, jsx_runtime_1.jsx)(\"div\", {}));\n    }\n}\nexports.PersonList = PersonList;\n\n\n//# sourceURL=webpack://webdev-exam/./src/ExamPart1.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0acde43437d2c7b638ee")
/******/ })();
/******/ 
/******/ }
);