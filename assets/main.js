const password_ele = document.getElementById("pwd_txt");
const LOWERCASE_CODES = 'acdefghijklnopqrstuvwxyz';
const UPPERCASE_CODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CODES = '0123456789';
const SYMBOL_CODES = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';


function generateRandomPassword(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
}
