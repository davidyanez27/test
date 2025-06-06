import { useState, type ChangeEvent, } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
    ...formState,
  };
};
