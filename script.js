const calculateBtn = document.getElementById('calculate_bmi');
const bmiText = document.getElementById('bmi-text');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

function calculateBMI() {
    let message = "";
    if (height.value === "" || weight.value === "") {
        bmiText.innerHTML = "Please enter both height and weight.";
    }else if (height.value < 2.72 && weight.value < 635 && height.value > 0.55 && weight.value > 2.5) {
        const bmi = weight.value / height.value ** 2;
        const description = (bmi) => {
            if (bmi < 18.5 && bmi > 0) {
                return `Thin 😭`;
            }else if (bmi < 25) {
                return `Normal 😊`;
            }else if (bmi <= 30) {
                return `Overweight 😨`;
            }else if (bmi > 30) {
                return `Obese 😱`;
            }else {
                return ""
            }
        }

        bmiText.innerHTML = "Your BMI is: " + bmi + ". <br> You are: " + description(bmi);
        console.log("Your BMI is: " + bmi + ". \n You are: " + description(bmi));
        return bmi;
    }else {
        message += `Invalid height or weight, more than the maximum or minimum value`;
        return message;
    }
}
calculateBtn.addEventListener('click', calculateBMI);
