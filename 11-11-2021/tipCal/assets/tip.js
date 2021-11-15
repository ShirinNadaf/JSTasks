const billVal = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 50, 110];
const tip = [];
const total = [];
const calTip = (billVal) => {
for(let i = 0; i < billVal.length; i++){
if(billVal[i] >= 50 && billVal[i] <= 300){
tip.push(billVal[i] * 0.15);
total.push(billVal[i] + (billVal[i] * 0.15))
}else{
tip.push(billVal[i] * 0.20);
total.push(billVal[i] + (billVal[i] * 0.2))
}
}
}
calTip(billVal);
console.log('bill val', billVal)
console.log('calc tip', tip);
console.log('final bill', total);