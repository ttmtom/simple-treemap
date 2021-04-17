import {jsonStringChecker} from '../src/util/stringInputChecker';

test('jsonStringChecker should return error when not a valid object format', () => {
    const testInput = 'testing string. this is not a valid object';
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Not an Object');
});

test('jsonStringChecker should return error when not a array format', () => {
    const testInput = `{
        name: 'A',
        weight: 3,
        value: 0.01
    }`;
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Not an array');
});

test('jsonStringChecker should return error when an empyt array', () => {
    const testInput = `[]`;
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Is an empty array');
});

test('jsonStringChecker should return error when array large than 50', () => {
    const mock = [];
    for (let i = 0; i < 51; i += 1) {
        mock.push({
            name: `mockname${i}`,
            weight: i,
            value: i,
        });
    }
    const testInput = JSON.stringify(mock);
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Array length should less than 50');
});

test('jsonStringChecker should return error when has invalid element', () => {
    const mockMissingValue = [];
    const mockMissingName = [];
    const mockMissingWeight = [];
    const mockLongName = [];
    const mockNonNumValue = [];
    const mockNonNumWeight = [];
    for (let i = 0; i < 4; i += 1) {
        const item = {
            name: `mockname${i}`,
            weight: i,
            value: i,
        };
        mockMissingValue.push(item);
        mockMissingName.push(item);
        mockMissingWeight.push(item);
        mockLongName.push(item);
        mockNonNumValue.push(item);
        mockNonNumWeight.push(item);

    }
    mockMissingValue.push({
        name: 'invalidElem',
        weight: 4,
    });
    mockMissingName.push({
        weight: 4,
        value: -0.1
    });
    mockMissingWeight.push({
        name: 'invalidElem',
        value: -0.01,
    });
    mockLongName.push({
        name: 'this name is tooooooooooooooooooooooooooooooooooo long',
        weight: 4,
        value: -0.4,
    });
    mockNonNumValue.push({
        name: 'invalidElem',
        weight: '4',
        value: -0.4,
    });
    mockNonNumWeight.push({
        name: 'invalidElem',
        weight: 4,
        value: '-0.4',
    });
    let testInput = JSON.stringify(mockMissingValue);
    let result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');

    testInput = JSON.stringify(mockMissingName);
    result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');

    testInput = JSON.stringify(mockMissingWeight);
    result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');

    testInput = JSON.stringify(mockLongName);
    result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');

    testInput = JSON.stringify(mockNonNumValue);
    result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');

    testInput = JSON.stringify(mockNonNumWeight);
    result = jsonStringChecker(testInput);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('Has invalid element');
});

test('jsonStringChecker should return valid true when input valid string', () => {
    const numOfElem = 4;
    const mock = [];
    for (let i = 0; i < numOfElem; i += 1) {
        mock.push({
            name: `mockname${i}`,
            weight: i,
            value: i,
        });
    }
    const testInput = JSON.stringify(mock);
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(true);
    expect(result.maxNumOfRow).toBe(numOfElem);
});

test('jsonStringChecker should accept json format with single quotes', () => {
    const testInput = `[
        {
            'name': 'singleQuotes',
            'weight': 4,
            'value': 0.01
        }
    ]`
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(true);
});

test('jsonStringChecker should accept json format that missing quotes on key', () => {
    const testInput = `[
        {
            name: 'singleQuotes',
            weight: 4,
            value: 0.01
        }
    ]`
    const result = jsonStringChecker(testInput);

    expect(result.valid).toBe(true);
});
