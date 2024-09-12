(() => {

    const inputName = document.querySelector('#name') as HTMLInputElement;
    const inputLastName = document.querySelector('#lastName') as HTMLInputElement;
    const saveButton = document.querySelector('#buttonSave') as HTMLButtonElement;

    interface Data {
        name?: string,
        lastName?: string,
    }


    saveButton.addEventListener('click', ()  => {

        const data : Data = {
            name: inputName.value,
            lastName: inputLastName.value,
        }
        
        console.log('Save sucefull');
        MostarDatos( data );

    });

    const MostarDatos = ( data : Data ) => {
        
        const {name, lastName} = data
        console.log( {name, lastName} );
        
    }


   

    

    


                

    

    
})();