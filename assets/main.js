function password() {

    const LOWERCASE_CODES = 'acdefghijklnopqrstuvwxyz';
    const UPPERCASE_CODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMBER_CODES = '0123456789';
    const SYMBOL_CODES = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    const chars = UPPERCASE_CODES + LOWERCASE_CODES + NUMBER_CODES + SYMBOL_CODES;
    const length = 6;
    var result = generateRandomPassword(length, chars);
    document.getElementById('pwd_txt').innerHTML = result;
}

function generateRandomPassword(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}
