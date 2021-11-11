import { v4 as uuid } from 'uuid';
// import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './ContactsForm.module.css';
import { addContact } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addContact({ ...data, id: uuid() }));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Name
        <input
          type="text"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
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
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
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
    </form>
  );
}

// const mapToDispatchProps = dispatch => ({
//   addNewContact: contact => dispatch(addContact(contact)),
// });
// export default connect(null, mapToDispatchProps)(ContactsForm);

// ContactsForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
// };
