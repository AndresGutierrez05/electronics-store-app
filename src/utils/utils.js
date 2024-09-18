export function isNumberKey(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))
        evt.preventDefault();
}

export function validateRange(evt){
    const value = parseInt(evt.target.value);
    const min = parseInt(evt.target.min);
    const max = parseInt(evt.target.max);
    if(!isNaN(value)){
        if(!(value >= min && value <= max)){
            return false;
        }
    }
    return true;
}

export const roundPrice = (price) => (Math.round(price * 100) / 100).toFixed(2);