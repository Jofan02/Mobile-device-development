//1.
// Import modul
import {displayTemperature}
from './index.js';

// Konversi suhu dan tampilkan hasil 
displayTemperature(99.20);

// Index
// Fungsi untuk mengkonversi suhu Fahrenheit ke Celcius
export function convertToCelcius(Fahrenheit) {
    return (fahrenheit - 32)*5/9;
}

// Fungsi untuk menampilkan hasil konversi suhu
export function displayTemperature(fahrenheit) {
    const celcius = convertToCelcius(fahrenheit)
        console.log('${fahrenheit} Fahrenheit = ${celcius}Celcius');
    }  



//2.
import calculateBMI from './index.js';

const weight = 70;
const height = 1.7;

const result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}`);
console.log(`Category: ${result.category}`);

//Index
export default function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category;
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else if (bmi >= 30) {
      category = 'Obese';
    }
  
    return { bmi, category };
  }
  
  
