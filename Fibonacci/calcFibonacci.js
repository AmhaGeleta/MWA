module.exports = function(num){
    var prev1 = 0;
    var prev2 = 1;
    var count =2;
    var temp;
    if(num <0) num = -(num);
    num = parseInt(num);
    while(count<=num){
        temp = prev1;
        prev1=prev2;
        prev2 = temp + prev1;
        count++;
    }
    return prev2;

}