const phoneNumberIsValid = (numberString: string) => {
    const russianPhoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
    const armenianPhoneRegex = /^((\+374|0)+([0-9]){8})$/;
    return (numberString.match(russianPhoneRegex) || numberString.match(armenianPhoneRegex))
}

export default phoneNumberIsValid