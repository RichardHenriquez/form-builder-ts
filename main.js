"use strict";
(() => {
    const inputName = document.querySelector('#name');
    const saveButton = document.querySelector('#buttonSave');
    const getInputs = () => {
        const value = saveButton.addEventListener('click', () => {
            return {
                name: inputName.value
            };
        });
        return value;
    };
    if (getInputs())
        console.log(getInputs());
})();
