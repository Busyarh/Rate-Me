const form = document.querySelector('#form')
const inputs = document.querySelectorAll('input')
const thankYouContainer = document.querySelector('#thankYou')
const selectedVal = document.querySelector('#selectedVal')
let inputValue;

form.addEventListener('submit', (event)=> {
  event.preventDefault()
  console.log(inputValue)
  if(inputValue !== undefined){
  
    thankYouContainer.style.visibility = 'visible'
    selectedVal.innerHTML = `You selected ${inputValue} of 5`
  }
})

function selectedValue(element){
  if (!inputValue){
    const input = element.querySelector('input')
    const inputVal = input.value;
    inputValue = inputVal
    element.style.backgroundColor = '#ff6600'
  }
}

// function getUserBrowerDetails(val){
//   const value = this.val
//   console.log(value)
//   return value
// }
