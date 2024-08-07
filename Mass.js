const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  console.log(height);
  console.log(weight);
  if (height === '' || height <= 0) {
    alert('Please Enter Valid height');
  } else if (weight === '' || weight <= 0) {
    alert('Please Enter Valid weight');
  } else {
    const result = (weight / ((height * height) / 1000)).toFixed(2);
    document.querySelector('#results').innerHTML = `BMI -> ${result}`;
  }
});
