"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIDentity = void 0;
/**
 * ```js
 *
 *    //Example of utilisation :
 *    const Identity = new UIDentity();
 *    Identity.setTitle("Identity");
 *    Identity.setSubTitle("IDENTITY DOCUMENTS");
 *    Identity.setName("Ninja");
 *    Identity.setSurname("Cool");
 *    Identity.setBirthday("12/12/1998") //Month day years.
 *    Identity.openIdentity();
 *    console.log("LOADED");
 * ```
 */
class UIDentity {
    constructor() {
        this.bg_container = document.createElement('div');
        this.head = document.createElement('div');
        this.header = document.createElement('header');
        this.separator = document.createElement('div');
        this.form = document.createElement('form');
        this.divGenre = document.createElement('div');
        this.spaceGenre = document.createElement('div');
        this.title = document.createElement('h2');
        this.subTitle = document.createElement('p');
        this.labelName = document.createElement('label');
        this.inputName = document.createElement('input');
        this.labelSurname = document.createElement('label');
        this.inputSurname = document.createElement('input');
        this.labelBirth = document.createElement('label');
        this.inputBirth = document.createElement('input');
        this.labelGenre = document.createElement('label');
        this.btnGenreMale = document.createElement('button');
        this.btnGenreFemale = document.createElement('button');
        this.btnValidate = document.createElement('button');
        //Property : 
        //Container : 
        this.bg_container.classList.add('background-container', 'my-5', 'mx-5');
        this.bg_container.style.visibility = "hidden";
        //Title :
        this.title.classList.add('fw-normal');
        this.title.textContent = "";
        //Separator + Subtitle :
        this.separator.classList.add('separator');
        this.subTitle.textContent = "";
        //Formulaire :
        this.form.classList.add('background-main', 'p-2', 'd-flex', 'flex-column');
        //LabelName + input :
        this.labelName.classList.add('fw-bold');
        this.labelName.textContent = "Name";
        this.inputName.classList.add('input', 'my-2', 'rounded');
        this.inputName.type = "text";
        this.inputName.maxLength = 30;
        this.inputName.placeholder = "Type name here";
        //LabelSurname + input :
        this.labelSurname.classList.add('fw-bold');
        this.labelSurname.textContent = "Surname";
        this.inputSurname.classList.add('input', 'my-2', 'rounded');
        this.inputSurname.type = "text";
        this.inputSurname.maxLength = 30;
        this.inputSurname.placeholder = "Type surname here";
        //LabelBirth + input :
        this.labelBirth.classList.add('fw-bold');
        this.labelBirth.textContent = "Data of birth";
        this.inputBirth.classList.add('input', 'my-2', 'rounded');
        this.inputBirth.type = "text";
        this.inputBirth.maxLength = 10;
        this.inputBirth.placeholder = "dd/mm/yy";
        this.inputBirth.value = "";
        //New Div which will contain the Genre :
        this.divGenre.classList.add('my-2');
        //LabelGenre + TextContent :
        this.labelGenre.classList.add('fw-bold');
        this.labelGenre.textContent = "Genre :";
        //LabelMale + TextContent :
        this.btnGenreMale.classList.add('mx-1', 'btn', 'btn-primary', 'rounded', 'fw-bold');
        this.btnGenreMale.textContent = "Male";
        //LabelFemale + TextContent :
        this.btnGenreFemale.classList.add('mx-1', 'btn', 'btn-danger', 'rounded', 'fw-bold');
        this.btnGenreFemale.textContent = "Female";
        this.spaceGenre.innerHTML = "<br><br>";
        //BtnValidate + TextContent :
        this.btnValidate.classList.add('mx-1', 'btn', 'btn-success', 'rounded', 'align-self-end', 'fw-bold');
        this.btnValidate.textContent = "Validate";
        //Append to element :
        //Element attach to the container :
        this.bg_container.append(this.head);
        this.bg_container.append(this.form);
        //Element attach to the head : 
        this.head.append(this.header);
        this.head.append(this.separator);
        //Element attach to the separator :
        this.separator.append(this.subTitle);
        //Element attach to the header : 
        this.header.append(this.title);
        //Element attach to the form :
        this.form.append(this.labelName);
        this.form.append(this.inputName);
        this.form.append(this.labelSurname);
        this.form.append(this.inputSurname);
        this.form.append(this.labelBirth);
        this.form.append(this.inputBirth);
        this.form.append(this.divGenre);
        this.form.append(this.btnValidate);
        //Element attach to the divGenre : 
        this.divGenre.append(this.labelGenre);
        this.divGenre.append(this.btnGenreMale);
        this.divGenre.append(this.btnGenreFemale);
        this.divGenre.append(this.spaceGenre);
        //Element attach to body :
        document.body.append(this.bg_container);
    }
    /**
     * This allow us to set the menu visible.
    */
    openIdentity() {
        this.bg_container.style.visibility = "visible";
    }
    /**
     * This allow us to set the menu to hidden and reset all the property.
    */
    closeIdentity() {
        this.bg_container.style.display = "none";
        this.setName("");
        this.setSurname("");
        this.setBirthday("");
    }
    /**
     *
     * @param string a name.
     */
    setName(name) {
        this.inputName.value = name;
    }
    /**
     *
     * @return the name value entered.
     */
    getName() {
        return this.inputName.value;
    }
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputName() {
        return this.inputName;
    }
    /**
     *
     * @param string a surname.
     */
    setSurname(surname) {
        this.inputSurname.value = surname;
    }
    /**
     *
     * @return the surname value entered.
     */
    getSurname() {
        return this.inputSurname.value;
    }
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputSurname() {
        return this.inputSurname;
    }
    /**
     *
     * @param string birthday (dd/mm/yy).
     */
    setBirthday(birthday) {
        this.inputBirth.value = birthday;
    }
    /**
     *
     * @return the birthday value entered (dd/mm/yy).
     */
    getBirthday() {
        return this.inputBirth.value;
    }
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputBirthday() {
        return this.inputBirth;
    }
    /**
     *
     * @param string title of the menu.
     */
    setTitle(title) {
        this.title.textContent = title;
    }
    /**
     *
     * @return the actual title of the menu.
     */
    getTitle() {
        return this.title.textContent;
    }
    /**
     *
     * @param string the actual subtitle of the menu.
     */
    setSubTitle(subtitle) {
        this.subTitle.textContent = subtitle;
    }
    /**
     *
     * @return the actual subtitle of the menu.
     */
    getSubTitle() {
        return this.subTitle.textContent;
    }
    /**
     *
     * @return the actual male genre button.
     */
    getBtnMale() {
        return this.btnGenreMale;
    }
    /**
     *
     * @return the actual female genre button.
     */
    getBtnFemale() {
        return this.btnGenreFemale;
    }
    /**
     *
     * @return the actual Validate identity button.
     */
    getBtnValidate() {
        return this.btnValidate;
    }
}
exports.UIDentity = UIDentity;
