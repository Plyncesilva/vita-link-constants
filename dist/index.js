"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["MISSING_REQUIRED"] = 0] = "MISSING_REQUIRED";
    ErrorCode[ErrorCode["INVALID_DATA"] = 1] = "INVALID_DATA";
    ErrorCode[ErrorCode["INVALID_TYPE"] = 2] = "INVALID_TYPE";
    ErrorCode[ErrorCode["INVALID_JSON"] = 3] = "INVALID_JSON";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
;
