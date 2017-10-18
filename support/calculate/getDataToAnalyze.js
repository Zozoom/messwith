/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */

module.exports = (numberOfWeeks) => {
    console.log("\n<====================== Data Start =============================>\n");

    var numbers = new Array();

    // Getting the right number from the table.
    for (var i=0;i<numberOfWeeks;i++){
        numbers[i] = browser.getText('((//tr)['+(i+2)+']/td)[12]');
        //console.log("\nLog -"+i+" :"+ browser.getText('((//tr)['+i+']/td)'));
        //console.error("First number: "+ browser.getText('((//tr)['+i+']/td)[12]'));
    }

    // Modus calculator
    function mode(arr){
        var numMapping = {};
        for(var i = 0; i < arr.length; i++){
            if(numMapping[arr[i]] === undefined){
                numMapping[arr[i]] = 0;
            }
            numMapping[arr[i]] += 1;
        }
        var greatestFreq = 0;
        var mode;
        for(var prop in numMapping){
            if(numMapping[prop] > greatestFreq){
                greatestFreq = numMapping[prop];
                mode = prop;
            }
        }
        console.log("\ngreatestFreq: "+greatestFreq);
        return parseInt(mode);
    }

    console.log("\nNumbers: "+numbers);
    console.log("\nmapping: "+mode(numbers));

    console.log("\n<====================== Data End =============================>\n");
};
