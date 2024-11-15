const input = document.getElementById("number")
const output = document.getElementById("output")
const button = document.getElementById("convert-btn")
let answer = "";
const numbers = [
  {
    value: 1,
    digit: "I",
  },
  {
    value: 4,
    digit: "IV",
  },
  {
    value: 5,
    digit: "V",
  },
  {
    value: 9,
    digit: "IX",
  },
  {
    value: 10,
    digit: "X",
  },
  {
    value: 40,
    digit: "XL",
  },
  {
    value: 50,
    digit: "L",
  },
  {
    value: 90,
    digit: "XC",
  },
  {
    value: 100,
    digit: "C",
  },
  {
    value: 400,
    digit: "CD",
  },
  {
    value: 500,
    digit: "D",
  },
  {
    value: 900,
    digit: "CM",
  },
  {
    value: 1000,
    digit: "M",
  },
  {
    value: 4000,
    digit: "IV̅"
  },
  {
    value: 5000,
    digit: "V̅"
  },
  {
    value: 9000,
    digit: "IX̅"
  },
  {
    value: 10000,
    digit: "X̅"
  },
  {
    value: 40000,
    digit: "Iↇ"
  },
  {
    value: 50000,
    digit: "ↇ"
  },
  {
    value: 90000,
    digit: "Iↈ"
  },
  {
    value: 100000,
    digit: "ↈ"
  },
  {
    value: 400000,
    digit: "IIↃↃↃↃ"
  },
  {
    value: 500000,
    digit: "IↃↃↃↃ"
  },
  {
    value: 900000,
    digit: "ICCCCIↃↃↃↃ"
  },
  {
    value: 1000000,
    digit: "CCCCIↃↃↃↃ"
  },
  {
    value: 4000000,
    digit: "not real"
  }
]
const check = e => {
  let highestPossible = 0
  for(let i = 0; numbers[i].value<=e; i++){
    highestPossible = i
    console.log(numbers[i].value)
  }
  e -= numbers[highestPossible].value
  if(e!==0){
    answer += `${numbers[highestPossible].digit}`
    check(e)
  } else{
    answer += `${numbers[highestPossible].digit}`
    output.innerText = `${answer}`
    return answer
  }
}
button.addEventListener("click",()=>{
  const number = input.value
  answer = ''
  if(number=="") {
    output.innerText = "Please enter a valid number"
    return
  }else if(number<1){
    output.innerText = "Please enter a number greater than or equal to 1"
    return
  }else if(number>=4000000) {
    output.innerText = "Please enter a number less than or equal to 4 million"
    return 
  } else{
      check(number)
    
  }
  })
const copyTextElement = document.getElementById('output');

    // Add a click event listener
    copyTextElement.addEventListener('click', () => {
        // Get the text content of the element
        const textToCopy = copyTextElement.textContent;

        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
