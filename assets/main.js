const passwordOutputElement = document.getElementById('passwordOutput');
const passwordOutputContainerElement = document.getElementById('passwordOutputContainer');

function checkPasswordOutput() {
    if (passwordOutputElement.innerHTML !== '') {
        passwordOutputContainerElement.classList.remove('hidden');
    }
}

function password() {
    const LOWERCASE_CODES = 'abcdefghijkmnopqrstuvwxyz';
    const UPPERCASE_CODES = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const NUMBER_CODES = '23456789';
    const SYMBOL_CODES = '!$%&*+-=?@^_~'; // avoiding symbols, such as ', " and |
    const length = parseInt(document.getElementById('password-length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    // Validate password length
    if (isNaN(length) || length < 8 || length > 64) {
        alert('Password length must be between 8 and 64 characters');
        return;
    }

    // Validate at least one option is checked
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        alert('Please select at least one option');
        return;
    }

    // Build character set based on selected options
    let chars = '';
    if (includeLowercase) {
        chars += LOWERCASE_CODES;
    }
    if (includeUppercase) {
        chars += UPPERCASE_CODES;
    }
    if (includeNumbers) {
        chars += NUMBER_CODES;
    }
    if (includeSymbols) {
        chars += SYMBOL_CODES;
    }

    // cryptographically secure random password generator
    let password = '';
    const crypto = window.crypto || window.msCrypto; // Use Web Crypto API if available
    const array = new Uint32Array(length);

    if (crypto && crypto.getRandomValues) {
        crypto.getRandomValues(array);
    } else {
        // fallback to Math.random() if Web Crypto API is not available
        for (let i = 0; i < length; i++) {
            array[i] = Math.floor(Math.random() * 4294967296);
        }
    }
    for (let i = 0; i < length; i++) {
        const index = array[i] % chars.length;
        password += chars.charAt(index);
    }
    // Display password
    passwordOutputElement.innerHTML = password;
    checkPasswordOutput();
}

// Add event listener to generate button
const generatePassword = document.getElementById('generate-password');
generatePassword.addEventListener('click', password);