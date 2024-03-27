const inputText = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');


function isPalindrome() {
    // Get the string from the input field
    let s = inputText.value;
    let inputtexts = inputText.value;
    const regex  = /[^a-zA-Z0-9]/g
    // Remove non-alphanumeric characters and convert to lowercase
    if (inputText.value.length === 0) {
        alert("Please input a value");
    } else {
        s = s.replace(regex, '').toLowerCase();
        // Check if the string is equal to its reverse
        if((s === s.split('').reverse().join('')) == true) {
            result.innerHTML = `<strong>${inputtexts}</strong> is a palindrome`;
            result.style.display = 'block';
        } else {
            result.innerHTML = `<strong>${inputtexts}</strong> is not palindrome`
            result.style.display = 'block';
        }
    }
}

btn.addEventListener('click', isPalindrome);