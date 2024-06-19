// src/redux/actions/formActions.js
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';

export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});
