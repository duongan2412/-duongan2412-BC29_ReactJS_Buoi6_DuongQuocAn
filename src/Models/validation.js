
export class Validation {
    checkEmpty = (value, errorID, mess) => {
        if (value === "") {
            document.getElementById(errorID).innerHTML = mess;
            document.getElementById(errorID).style.display = "block";
            return false;
        } else {
            document.getElementById(errorID).innerHTML = "";
            document.getElementById(errorID).style.display = "none";
            return true;
        }
    }
}