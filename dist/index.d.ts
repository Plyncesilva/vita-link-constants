declare enum ErrorCode {
    MISSING_REQUIRED = 0,
    INVALID_DATA = 1,
    INVALID_TYPE = 2,
    INVALID_JSON = 3,
    INVALID_EMAIL = 4,
    EMAIL_EXISTS = 5,
    PASSWORD_REQUIREMENTS = 6,
    PASSWORD_COMMON = 7,
    NOT_FOUND_ACCOUNT = 8,
    UNKOWN = 9
}

declare const PASSWORD_LENGTH: number;

export { ErrorCode, PASSWORD_LENGTH };
