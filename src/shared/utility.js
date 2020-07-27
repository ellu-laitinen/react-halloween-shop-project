export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}


export const checkValidation = (value, rules) => {
    let isValid = true;

    if (!rules) { // <-- to make the drop-down menu NOT give an error when rules are checked
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid;
}