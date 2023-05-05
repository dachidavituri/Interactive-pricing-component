let rangeInput = document.getElementById("range-input");
let result = document.getElementById("result");
let amount = document.querySelector(".amount");
let yearOrMonth = document.querySelector(".year-month");
let check = document.getElementById("switch");
let month = true;
//1) change amount related to range slider value
values = {
  1: "10K pageviews",
  2: "50K pageviews",
  3: "100K pageviews",
  4: "500K pageviews",
  5: "1M pageviews",
};
values1 = {
  1: "$8.00",
  2: "$12.00",
  3: "$16.00",
  4: "$24.00",
  5: "$36.00",
};
console.log(Object.keys(values));
rangeInput.addEventListener("input", function () {
  for (let number in values) {
    if (rangeInput.value == number) {
      amount.textContent = values[number];
      result.textContent = values1[number];
    }
  }
});
// 2) amount implementation
check.addEventListener("input", function () {
  if (month) {
    yearOrMonth.textContent = "/ year ";
    let defaultConvert = Number(values1[rangeInput.value].slice(1)) * 12 - Number((values1[rangeInput.value].slice(1)) * 12 / 4)
    result.textContent = "$" + defaultConvert + ".00"
    rangeInput.addEventListener('input', function(){
        let price = Number(values1[rangeInput.value].slice(1));
        let price1 = price * 12 - (price  * 12 / 4)
        result.textContent = '$' + price1 + ".00"
    })
    month = false;
  } else {
    yearOrMonth.textContent = "/ month";
    let defaultConvert = (Number(values1[rangeInput.value].slice(1)) * 12 - Number((values1[rangeInput.value].slice(1)) * 12 / 4)) / 9
    result.textContent = '$' + defaultConvert + '.00'
    rangeInput.addEventListener('input', function(){
        let price = Number(values1[rangeInput.value].slice(1)); 
        result.textContent = '$' + price + ".00"
    }) 
    month = true;
  }
});



