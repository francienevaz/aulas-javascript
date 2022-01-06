function mapSemThis (arr) {
   return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [1,2,5,4,6,8,9];

console.log(mapSemThis(nums));

console.log(nums);