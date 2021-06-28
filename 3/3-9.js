// Escreva um programa que solicite duas datas pelo teclado e imprima primeiro a menor data seguida
//da maior data.

//Método de comparação
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
};
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
// -----------------------------------------------------------------

const getMax = (a, b) => a < b ? b : a;
function getOldestAndNewestDate(val1, val2, date1, date2) {
    const output = {};
    oldestDate = getMax(val1, val2);
    
    if (oldestDate === val1) {
        output.newest = date1;
        output.oldest = date2;
        return output;
    } else if (oldestDate === val2) {
        output.newest = date2;
        output.oldest = date1;
        return output;
    };
}

function orderDates(date1, date2) {

    const dayDate1 = date1[0];
    const monthDate1 = date1[1];
    const yearDate1 = date1[2];

    const dayDate2 = date2[0];
    const monthDate2 = date2[1];
    const yearDate2 = date2[2];

    const output = 
        getOldestAndNewestDate(yearDate1, yearDate2, date1, date2) ||
        getOldestAndNewestDate(monthDate1, monthDate2, date1, date2) ||
        getOldestAndNewestDate(dayDate1, dayDate2, date1, date2) ||
        {
            oldest: date1,
            newest: date2
        };
    return output;
};

const test1 = orderDates(['02', '01', '1960'], ['01', '01', '1960'])
console.log(test1.oldest.equals(['01', '01', '1960']) && test1.newest.equals(['02', '01', '1960']));

const test2 = orderDates(['03', '04', '2005'], ['01', '12', '2006']);
console.log(test2.oldest.equals(['03', '04', '2005']) && test2.newest.equals(['01', '12', '2006']));

const test3 = orderDates(['02', '01', '1960'], ['02', '01', '1960']);
console.log(test3.oldest.equals(test3.newest));