# Simple Treemap

A simple treemap web application.
Input a JSON data and draw a equal height treemap

## Instructions
Submit a array of data as JSON format on `JSON Data` Field

Sample JSON:
```json
[
    {
        "name": "sampleNameA",
        "weight": 4,
        "value": -0.1
    },
    ...
]
```

Data format:
| key    | type   | description                                                                                                                  |
|--------|--------|------------------------------------------------------------------------------------------------------------------------------|
| name   | string | The name of the data. Must less than 50 characters                                                                           |
| weight | number | The weight of the data. Must be a positive Interger. Affect the width on treemap                                             |
| value  | number | The value of the data. Affect the cell color on treemap. display green when value is positive and red when value is negative |


After a valid Json is input, the number of row input would be enable.
Submit a number than >0 and <= array length

Click `submit` and get your graph :)

## Build

1. clone the project
2. cd to project root
3. run `npm install`
4. run `npm run build`
5. get the product in `dist/`