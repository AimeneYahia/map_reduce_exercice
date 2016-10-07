var aOWords = [];
var aSortedWords = [];
var aReducedWords = [];

/// MAP
function genKeysValuesArray(element, index, array)
{
    var oWord = {key:element, value:1, counted:false};
    aOWords[aOWords.length] = oWord;
}

function map(sInput)
{
    if(sInput != "")
    {
        var aWords = sInput.split(" ");
        aWords.forEach(genKeysValuesArray);
    }
}
/// END MAP

/// SORT
function countWords(oWord, index, array)
{
    if(!oWord.counted)
    {
        if(index != aOWords.length - 1)
        {
            for(var i = index + 1; i < aOWords.length; i++)
            {
                if(aOWords[i].key == oWord.key)
                {
                    // We directly count the number of words, without creating an array (should not be done this way)
                    oWord.value++;
                    aOWords[i].counted = true;
                }
            }
        }
        aSortedWords[aSortedWords.length] = oWord;
    }
}

function sort()
{
    aOWords.forEach(countWords)
}
/// END SORT

/// REDUCE
function reduce(oWord)
{
    // If the value is an array (ex: [1, 1, 1])
    if(oWord.value.length != undefined)
    {
        oWord.value = oWord.value.length;
    }
    aReducedWords[aReducedWords.length] = oWord;
}
/// END REDUCE

/// DISPLAY
function displayLine(element, index, array)
{
    console.log(element.key + " " + element.value);
}

function displayOutput()
{
    aReducedWords.forEach(displayLine);
}
/// END DISPLAY


/// MAIN
// input file (.txt) is not handled, we start directly with the array of strings
var sRawInput = ["Hadoop uses MapReduce", "There is a Map phase", "", "There is a Reduce phase"];

// The parallel (ulti-threaded?) work is not handled, the tasks are completed one at the time 
sRawInput.forEach(map);
sort();
aSortedWords.forEach(reduce);
displayOutput();