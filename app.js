// Declare the Variables 
const string1 = document.getElementById('string1'),
      string2 = document.getElementById('string2'), 
      submitBtn = document.getElementById('submitBtn'), 
      displayMessage = document.querySelector('.message'); 

// Event 
submitBtn.addEventListener('click', getStrings);


// Get the strings 
function getStrings() {
    let str1, str2, str1Trimed = '', str2Trimed = '', str1Charcode = 0, str2Charcode = 0; 
    str1 = (string1.value).toLowerCase();
    str2 = (string2.value).toLowerCase();
    
    // Remove all space and quotation marks 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
    for (let i = 0; i < str1.length; i++) {
        if(alphabet.indexOf(str1[i]) >= 0) {
            str1Trimed += str1[i]; 
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if(alphabet.indexOf(str2[j]) >= 0) {
            str2Trimed += str2[j];
        }
    }

    // Use the total charcode of each of the editted string 
    for (let k = 0; k < str1Trimed.length; k++) {
        str1Charcode += parseInt(str1Trimed.charCodeAt(k));
    }

    for (let l = 0; l < str2Trimed.length; l++) {
        str2Charcode += parseInt(str2Trimed.charCodeAt(l));
    }


    // Then check of the two strings have the same characters 
    if (str1Charcode === str2Charcode) {
        setMessage(`${str1} and ${str2} are Anagrams of eachother.`, 'green');
    } else {
        setMessage(`${str1} and ${str2} are not Anagrams of eachother.`, 'red');
    }

    // Clear the input field 
    string1.value = ''; 
    string2.value = '';
}


// Set the display Message 
function setMessage(msg, color) {
    displayMessage.textContent = msg; 
    displayMessage.style.color = color;
}