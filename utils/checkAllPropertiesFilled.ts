const checkAllPropertiesFilled = (obj: Record<string, string>) => {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && !obj[prop].length) {
            return false;
        }
    }
    return true;
}

export default checkAllPropertiesFilled