(() => {

    const inputName = document.querySelector('#name') as HTMLInputElement;
    const saveButton = document.querySelector('#buttonSave') as HTMLButtonElement;

        interface Datos {

            name: string,

        }

        const getInputs = (): Datos => {

            const value: void = saveButton.addEventListener('click', ()  => {
                
                return {
                    name: inputName.value
                }
                
            });

            return value;

            

        };


        if (getInputs())

        console.log(getInputs());

    

    

    

    
            
})();