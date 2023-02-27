"use strict";

const popUp = document.getElementById('pop_up');
const checkBox = document.getElementById("checkbox");
const submitButton = document.getElementById('submitButton');
const popUpOk = document.getElementById('pop_up_ok');
const submitForm = document.getElementById('submitForm')


const openPopUp = () => popUp.classList.add('active');
const openPopUpOk = () => popUpOk.classList.add('active')
const closePopUp = () => popUp.classList.remove('active');
const closePopUpOk = () => popUpOk.classList.remove('active');
const toggleCheckbox = () => submitButton.disabled = !checkBox.checked;


const onApprove = () => {
    closePopUpOk();
    closePopUp();
    submitForm.reset();
};