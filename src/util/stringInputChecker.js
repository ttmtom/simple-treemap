/**
 * check the input object format
 * it should contain key: name, weight, value
 * name should a string and less than 50 char
 * weight should a integer
 * value should a number
 *
 * @param {Object} obj user input object.
 * @returns {boolean} is a valid obj
 */
function elementChecker(obj) {
    if (typeof obj.name !== 'string' || obj.name.length > 50) {
        return false;
    }
    if (typeof obj.weight !== 'number' || !Number.isInteger(obj.weight)) {
        return false;
    }
    if (typeof obj.value !== 'number') {
        return false;
    }
    return true;
}

/**
 * check the input string is an valid JSON
 * the JSON should be a array of object
 * array length should less than 50
 * check all element is a valid element
 *
 * @param {String} string user input string
 * @returns {object} the object contact valid and the error type
 */
export function jsonStringChecker(string) {
    let parseResult;
    try {
        parseResult = JSON.parse(string.replace(/(['"])?([a-zA-Z]+)(['"])?:([^\/])/g, '"$2":$4').replace(/[']/g, '\"'));
    } catch {
        return {
            valid: false,
            error: 'Not an Object',
        };
    }

    if (typeof parseResult !== 'object') {
        return {
            valid: false,
            error: 'Not an Object',
        };
    }

    if (!Array.isArray(parseResult)) {
        return {
            valid: false,
            error: 'Not an array',
        };
    }

    if (parseResult.length === 0) {
        return {
            valid: false,
            error: 'Is an empty array',
        };
    }

    if (parseResult.length > 50) {
        return {
            valid: false,
            error: 'Array length should less than 50'
        }
    }

    const hasInvalidElem = parseResult.find((obj) => !elementChecker(obj));
    if (hasInvalidElem) {
        return {
            valid: false,
            error: 'Has invalid element',
        };
    }

    console.log('-0----done', parseResult.length);
    return {
        valid: true,
        error: '',
        maxNumOfRow: parseResult.length,
    };
}