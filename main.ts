(() => {

    const name = document.querySelector('#name') as HTMLInputElement;
    const lastName = document.querySelector('#lastName') as HTMLInputElement;
    const age = document.querySelector('#age') as HTMLInputElement;
    const maritalStatus = document.querySelector('#maritalStatus') as HTMLInputElement;
    const address = document.querySelector('#address') as HTMLInputElement;
    const zip = document.querySelector('#zip') as HTMLInputElement;
    const saveButton = document.querySelector('#buttonSave') as HTMLButtonElement;
    const clear = document.querySelector('#buttonClear') as HTMLButtonElement;
    const inputs = document.querySelectorAll('input');
    
    class User {

        constructor(
            public name: string,
            public lastname: string,
            public age: string,
            public maritalStatus?: string,
            public address?: string,
            public zip?: string
        ){};

    };

    const InfoUser: User[] = [];

    interface Data {
        name: string,
        lastName: string,
        age: string,
        maritalStatus?: string,
        address?: string,
        zip?: string,
    };

    saveButton.addEventListener('click', () => {

        const data: Data = {
            name: name.value,
            lastName: lastName.value,
            age: age.value,
            maritalStatus: maritalStatus.value,
            address: address.value,
            zip: zip.value,
        }

        checkData( data );
        

    });

    clear.addEventListener( 'click', () => inputs.forEach( e => e.value = '' ) );

    const checkData = ( data : Data) => {

        const { name, lastName, age } = data;

        if ( name && lastName && age ) {
            saveData( data );
        } else {
            alert('The data of name, Last name, Age must be obligatory');
        }

    };

    const saveData = ( data: Data ): void => {

        const {name, lastName, age, maritalStatus, address, zip} = data

        InfoUser.push( new User( name, lastName, age, maritalStatus, address, zip ) );
        console.log( InfoUser );

        alert('Datos guardados correctamente');

    };

    
    
    


})();