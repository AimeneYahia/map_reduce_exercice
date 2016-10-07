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
var sRawInput = ["Hadoop uses MapReduce", "There is a Map phase", "", "There is a Reduce phase"];

sRawInput.forEach(map);
sort();
aSortedWords.forEach(reduce);
displayOutput();