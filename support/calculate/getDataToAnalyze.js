/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */

module.exports = (numberOfWeeks) => {
    console.log("\n<====================== Data Start =============================>\n");

    var numbers = new Array();

    // Get the columns
    for (var columns=12;columns<17;columns++){

        // Getting the right number from the table / column and / row (number of weeks)
        for (var i=0;i<numberOfWeeks;i++){
            numbers[i] = browser.getText('((//tr)['+(i+2)+']/td)['+columns+']');
            //console.log("\nLog -"+i+" :"+ browser.getText('((//tr)['+i+']/td)'));
            //console.error("First number: "+ browser.getText('((//tr)['+i+']/td)[12]'));
        }

        // Getting which number and how many times win.
        for (var k=1; k<90; k++)
        {
            var count=0;
            for (var j=1; j<numbers.length; j++)
            {
                if (numbers[j]==k){
                    count++;
                }
            }
            if (count > 1){
                console.log("Column: "+columns+" - "+k+" number was ( " +count+" times ) ");
            }
        }
        console.log("\n-------------------\n");
    }

    // Modus calculator
    // function mode(arr){
    //     var numMapping = {};
    //     for(var i = 0; i < arr.length; i++){
    //         if(numMapping[arr[i]] === undefined){
    //             numMapping[arr[i]] = 0;
    //         }
    //         numMapping[arr[i]] += 1;
    //     }
    //     var greatestFreq = 0;
    //     var mode;
    //     for(var prop in numMapping){
    //         if(numMapping[prop] > greatestFreq){
    //             greatestFreq = numMapping[prop];
    //             mode = prop;
    //         }
    //     }
    //     console.log("\ngreatestFreq: "+greatestFreq);
    //     return parseInt(mode);
    // }
    //
    // console.log("\nNumbers: "+numbers);
    // console.log("\nmapping: "+mode(numbers));

    console.log("\n<====================== Data End =============================>\n");
};
