"use strict";
define("components/button", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prueba = void 0;
    const prueba = () => {
        return 'mostrar prueba';
    };
    exports.prueba = prueba;
});
(() => {
    const inputName = document.querySelector('#name');
    const inputLastName = document.querySelector('#lastName');
    const saveButton = document.querySelector('#buttonSave');
    saveButton.addEventListener('click', () => {
        const data = {
            name: inputName.value,
            lastName: inputLastName.value,
        };
        console.log('Save sucefull');
        MostarDatos(data);
    });
    const MostarDatos = (data) => {
        const { name, lastName } = data;
        console.log({ name, lastName });
    };
})();
