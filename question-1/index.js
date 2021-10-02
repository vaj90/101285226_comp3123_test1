let lowerCaseWords = (mixedArray) => {
    let strList = [];
    mixedArray.map(x=> { if(typeof x == "string") strList.push(x)} );
    console.log(strList.map(x=>x.toLowerCase()));
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray);