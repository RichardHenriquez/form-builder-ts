"use strict";
(() => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const age = document.querySelector('#age');
    const maritalStatus = document.querySelector('#maritalStatus');
    const address = document.querySelector('#address');
    const zip = document.querySelector('#zip');
    const saveButton = document.querySelector('#buttonSave');
    const clear = document.querySelector('#buttonClear');
    const inputs = document.querySelectorAll('input');
    class User {
        constructor(name, lastname, age, maritalStatus, address, zip) {
            this.name = name;
            this.lastname = lastname;
            this.age = age;
            this.maritalStatus = maritalStatus;
            this.address = address;
            this.zip = zip;
        }
        ;
    }
    ;
    const InfoUser = [];
    ;
    saveButton.addEventListener('click', () => {
        const data = {
            name: name.value,
            lastName: lastName.value,
            age: age.value,
            maritalStatus: maritalStatus.value,
            address: address.value,
            zip: zip.value,
        };
        checkData(data);
    });
    clear.addEventListener('click', () => inputs.forEach(e => e.value = ''));
    const checkData = (data) => {
        const { name, lastName, age } = data;
        if (name && lastName && age) {
            saveData(data);
        }
        else {
            alert('The data of name, Last name, Age must be obligatory');
        }
    };
    const saveData = (data) => {
        const { name, lastName, age, maritalStatus, address, zip } = data;
        InfoUser.push(new User(name, lastName, age, maritalStatus, address, zip));
        console.log(InfoUser);
        alert('Datos guardados correctamente');
    };
})();
