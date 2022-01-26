/**
 * 
 * @param string date this function allow you to validate using regex the birthday MM/dd/yyyy.
 * @return a boolean.
 */
export function validateDate(date : string) : boolean
{
    const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (date_regex.test(date))
        return true;
    return false;
}

/**
 * 
 * @param string name this function allow you to validate the user name/lastName. 
 * @return a boolean.
 */
export function validateString(name) : boolean
{
    const re = /^[A-Za-z]+$/;
    if(re.test(name))
        return true;
    return false;
}

/**
 * 
 * @param string name this function allow you to validate the user name/lastName. 
 * @return a boolean.
 */
 export function validateWithFirstLetterUpper(name) : boolean
 {
     const re = /^[A-Z][a-z]{3,19}$/;
     if(re.test(name))
         return true;
     return false;
 }