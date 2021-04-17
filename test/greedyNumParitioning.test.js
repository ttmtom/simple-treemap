import {greedyNumPartitioning} from '../src/util/greedyNumPartitioning';

const sample1 = [
    {
        name: 'A',
        weight: 3,
        value: -0.02,
    },
    {
        name: 'B',
        weight: 3,
        value: 0.05,
    },
    {
        name: 'C',
        weight: 6,
        value: 0.015,
    },
    {
        name: 'D',
        weight: 2,
        value: -0.01,
    },
    {
        name: 'E',
        weight: 3,
        value: 0.01,
    },
];

test('greedyNumPartitioning should return the correct format', () => {
    const result = greedyNumPartitioning(sample1, 3);

    expect(typeof result.maxWidth).toBe('number');

    expect(Array.isArray(result.data)).toBe(true);

    result.data.forEach((row) => {
        expect(Array.isArray(row.data)).toBe(true);
        row.data.forEach((item) => {
            expect(typeof item.name).toBe('string');
            expect(typeof item.weight).toBe('number');
            expect(typeof item.value).toBe('number');
        })
    });
});

test('greedyNumPartitioning should return data array has length equals numOfRow', () => {
    const result1 = greedyNumPartitioning(sample1, 3);
    expect(result1.data.length).toBe(3);

    const result2 = greedyNumPartitioning(sample1, 5);
    expect(result2.data.length).toBe(5);
});

test('All data exist in the result', () => {
    const dataCopy = JSON.parse(JSON.stringify(sample1));

    const result = greedyNumPartitioning(sample1, 3);

    result.data.forEach((row) => {
        row.data.forEach((item) => {
            dataCopy.some((data) => {
                if (data.name === item.name) {
                    data.isExisit = true;
                    return true;
                }
                return false
            })
        });
    });

    expect(dataCopy.find(data => !data.isExisit)).toBe(undefined);
});