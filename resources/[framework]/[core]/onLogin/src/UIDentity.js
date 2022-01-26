import {UIDentity, validateDate, validateWithFirstLetterUpper, Style} from "../../../[dependancies]/lib"


//Instance of our IdentityMenu : 
const Identity = new UIDentity();

//Set by default to male : 
let characterModel = "mp_m_freemode_01";


//Main event NUI :
window.addEventListener('message', (event) => {
    if (event.data.isOpen === true)
    {
        //Create property and open the identity menu :
        Identity.setTitle("Identity");
        Identity.setSubTitle("IDENTITY DOCUMENTS");
        Identity.openIdentity();
    }
});


//Change the sexe ped to mp_m_freemode_01 :
Identity.getBtnMale().addEventListener('click', function(event) {
    event.preventDefault();
    characterModel = "mp_m_freemode_01";
})

//Change the sexe ped to mp_f_freemode_01 :
Identity.getBtnFemale().addEventListener('click', function(event) {
   event.preventDefault();
   characterModel = "mp_f_freemode_01";
})


//Push all the data once finish to the main.js :
Identity.getBtnValidate().addEventListener('click',  function(event) {
    event.preventDefault();

    //Check if the name begin with an uppercase and has valid character :
    if(!(validateWithFirstLetterUpper(Identity.getName())))
    {
        Identity.setName("");
        Identity.getInputName().style.border = Style.RED_BORDER_ERROR;
        Identity.getInputName().placeholder  = "Set a correct name with first letter uppercase."
    }
    else 
    {
        Identity.setName(Identity.getInputName().value);
        Identity.getInputName().style.border = Style.GREEN_BORDER_SUCCESS;
        
        //Check if the surname begin with an uppercase and has valid character :
        if(!(validateWithFirstLetterUpper(Identity.getSurname())))
        {
            Identity.setSurname("");
            Identity.getInputSurname().style.border = Style.RED_BORDER_ERROR; 
            Identity.getInputSurname().placeholder  = "Set a correct surname with first letter uppercase."
        }
        else 
        {
            Identity.setSurname(Identity.getInputSurname().value);
            Identity.getInputSurname().style.border = Style.GREEN_BORDER_SUCCESS;

            //Check if the birthday has valid input month/day/years :
            if(!(validateDate(Identity.getBirthday())))
            {
                Identity.setBirthday("");
                Identity.getInputBirthday().placeholder  = "Set a correct birthday month/day/years";
                Identity.getInputBirthday().style.border = Style.RED_BORDER_ERROR;
            }
            else 
            {
                Identity.setBirthday(Identity.getInputBirthday().value);
                Identity.getInputBirthday().style.border = Style.GREEN_BORDER_SUCCESS;
                console.log(`Name : ${Identity.getName()}\nSurname : ${Identity.getSurname()}\nBirthday : ${Identity.getBirthday()}\nModel : ${characterModel}`);

                //Send the data to main.js :
                fetch(`https://${GetParentResourceName()}/onValidateIdentity`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({
                        name     : Identity.getInputName().value,
                        surname  : Identity.getInputSurname().value,
                        birthday : Identity.getInputBirthday().value,
                        model    : characterModel
                    })
                });


                //Close the identity menu :
                Identity.closeIdentity();
            }
        }
    }
})