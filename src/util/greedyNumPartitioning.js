/**
 * function to equally distribute the set of data into numOfRow subset
 *
 * inverse sort the object by weight
 * pop the data to the most less subset
 *
 * @param {Array of Object} items
 * @param {Integer} numOfRow
 * @returns {Object} a objec contain the max width and array of object contain the equally distrubute result with numOfRow elements, each object represent the row information
 */
export function greedyNumPartitioning(items, numOfRow) {
    items.sort((a, b) => b.weight - a.weight);

    // init the container
    const dataContainer = [];
    for (let i = 0; i < numOfRow; i += 1) {
        dataContainer.push({
            sumOfWeight: 0,
            data: [],
        });
    }

    let maxWidth = Number.NEGATIVE_INFINITY;

    items.forEach((item, index) => {
        if (index < numOfRow) {
            dataContainer[index].data.push(item);
            dataContainer[index].sumOfWeight += item.weight;

            if (dataContainer[index].sumOfWeight > maxWidth) {
                maxWidth = dataContainer[index].sumOfWeight;
            }
        } else {
            let currentMinWeight = Number.POSITIVE_INFINITY;
            let minWeightIndex = 0;
            dataContainer.forEach((result, idx) => {
                if (result.sumOfWeight < currentMinWeight) {
                    minWeightIndex = idx;
                    currentMinWeight = result.sumOfWeight;
                }
            });

            dataContainer[minWeightIndex].sumOfWeight += item.weight;
            dataContainer[minWeightIndex].data.push(item);

            if (dataContainer[minWeightIndex].sumOfWeight > maxWidth) {
                maxWidth = dataContainer[minWeightIndex].sumOfWeight;
            }
        }
    });
    return {
        maxWidth,
        data: dataContainer,
    };
}