module.exports = function add(str) {

    'use strict';

    if (!str) {
        return 0;
    }

    if (str.startsWith('//')) {
        let delimiter;
        let delimitersArray = [];
        if (str.indexOf('[') !== -1) {
            delimitersArray = str.match(/\[(.*?)\]/g);
        } else {
            delimitersArray.push(str.substring(2, 3));
        }
        delimitersArray.forEach(function(item) {
            delimiter = item.replace(/[\[\]']+/g, '');
            while (str.indexOf(delimiter) !== -1) {
                str = str.replace(delimiter, ',');
            }
        });
    }
    let numbers = str.split(/[,\n]/)
        .map(function(item) {
            return parseInt(item);
        })
        .filter(function(item) {
            return item < 1000;
        });

    let negativeNumbers = [];
    let sum = numbers.reduce((a, b) => {
        if (b < 0) {
            negativeNumbers.push(b)
        }
        return a + b;
    }, 0);

    if (negativeNumbers.length > 0) {
        throw Error('negatives not allowed' + negativeNumbers.join(","));
    };
    
    return sum;

};