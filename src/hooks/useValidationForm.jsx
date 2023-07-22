import { useState, useCallback } from 'react';
import isEmail from "validator/es/lib/isEmail";

export default function useValidationForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const { value, name } = input;

    if (name === 'name') {
      const regex = /^[a-zA-Zа-яА-ЯёЁëË\s-]*$/
      if (regex.test(input.value)) {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
      }

    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity('Некорректный адрес почты.');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm, setIsValid };
}
