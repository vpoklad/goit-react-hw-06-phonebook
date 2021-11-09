import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './ContactsForm.module.css';

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log({ ...data, id: uuid() });

  // const contact = {
  //   id: uuid(),
  //   name,
  //   number,
  // };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Name
        <input
          type="text"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
        {errors?.name?.type === 'pattern' && (
          <p className={s.error}>Alphabetical characters only</p>
        )}
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          {...register('number', {
            required: true,
            pattern: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
          })}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        />
        {errors?.number?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
        {errors?.number?.type === 'pattern' && (
          <p className={s.error}>Numeric characters only</p>
        )}
      </label>
      <Button
        variant="contained"
        type="submit"
        size="small"
        endIcon={<SendIcon />}
      >
        Add contact
      </Button>
      {/* <button type="submit">Add contact</button> */}
    </form>
  );
}
