const apiURL = 'https://api.funtranslations.com/translate/yoda.json?text='

// Get buttons
const translateBtn = document.querySelector('#translateBtn')
const resetBtn = document.querySelector('#resetBtn')

// Getting result and input values
let input = document.querySelector('#user-input')
let result = document.querySelector('#output')

const translate = async () => {
  const { value: inputVal } = input

  // Fetch Data from api
  const response = await fetch(`${apiURL}${inputVal}`)
  const {
    contents: { translated },
  } = await response.json()

  // Set result to the lower text area
  result.value = translated
}

const resetText = () => {
  input.value = ''
  result.value = ''
}

translateBtn.addEventListener('click', translate)
resetBtn.addEventListener('click', resetText)
