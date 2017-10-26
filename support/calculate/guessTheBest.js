
import clickElement from '../../support/action/clickElement';

module.exports = (times) => {
    console.log("\n<====================== Guessing... =============================>\n");

    var rows = times;
    var column = 5;

    var numbers = Array_matrix(rows,column,"?");

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < column; j++) {
            numbers[i][j] = Math.floor((Math.random() * 90) + 1);
            clickElement("click","element",".statistics__number:nth-child("+(j+1)+"):nth-child("+(j+1)+")");
            browser.keys(numbers[i][j].toString());
            browser.pause(500);
        }
        browser.pause(1500);
        browser.click(".button.statistics__button");
        browser.pause(1500);
    }


    //console.log(numbers);
    console.log("\n<====================== Guessing End =============================>\n");
};

/**
 *
 * @param numrows
 * @param numcols
 * @param initial
 * @returns {Array}
 * @constructor
 */
function Array_matrix (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
