import ContactItem from './ContactItem';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
export default function ContactList({ handleDelItem }) {
  const contacts = useSelector(state =>
    state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
    ),
  );
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleDelItem={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   handleDelItem: PropTypes.func,
// };
// const mapStateToProps = state => ({
//   contacts: state.contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
//   ),
// });
// const mapDispatchToProps = dispatch => ({
//   handleDelItem: id => dispatch(deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
