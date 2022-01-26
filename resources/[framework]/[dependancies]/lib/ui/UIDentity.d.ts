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
export declare class UIDentity {
    private bg_container;
    private head;
    private header;
    private separator;
    private form;
    private divGenre;
    private spaceGenre;
    private title;
    private subTitle;
    private labelName;
    private inputName;
    private labelSurname;
    private inputSurname;
    private labelBirth;
    private inputBirth;
    private labelGenre;
    private btnGenreMale;
    private btnGenreFemale;
    private btnValidate;
    constructor();
    /**
     * This allow us to set the menu visible.
    */
    openIdentity(): void;
    /**
     * This allow us to set the menu to hidden and reset all the property.
    */
    closeIdentity(): void;
    /**
     *
     * @param string a name.
     */
    setName(name: string): void;
    /**
     *
     * @return the name value entered.
     */
    getName(): string;
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputName(): HTMLInputElement;
    /**
     *
     * @param string a surname.
     */
    setSurname(surname: string): void;
    /**
     *
     * @return the surname value entered.
     */
    getSurname(): string;
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputSurname(): HTMLInputElement;
    /**
     *
     * @param string birthday (dd/mm/yy).
     */
    setBirthday(birthday: string): void;
    /**
     *
     * @return the birthday value entered (dd/mm/yy).
     */
    getBirthday(): string;
    /**
     *
     * @returns Return the actual input to be able to add some style on it if needed.
     */
    getInputBirthday(): HTMLInputElement;
    /**
     *
     * @param string title of the menu.
     */
    setTitle(title: string): void;
    /**
     *
     * @return the actual title of the menu.
     */
    getTitle(): string;
    /**
     *
     * @param string the actual subtitle of the menu.
     */
    setSubTitle(subtitle: string): void;
    /**
     *
     * @return the actual subtitle of the menu.
     */
    getSubTitle(): string;
    /**
     *
     * @return the actual male genre button.
     */
    getBtnMale(): HTMLButtonElement;
    /**
     *
     * @return the actual female genre button.
     */
    getBtnFemale(): HTMLButtonElement;
    /**
     *
     * @return the actual Validate identity button.
     */
    getBtnValidate(): HTMLButtonElement;
}
