import { Container } from 'components/App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactsForm/ContactsForm';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectError, selectOperetion } from 'redux/selector/selectors';

const Contacts = () => {
  const operetion = useSelector(selectOperetion);
  const error = useSelector(selectError);
  return (
    <div>
      <Container>
        <ContactForm />
        {error && <ErrorCard />}
        <div>
          <Title title="Contacts"></Title>
          <Filter />
          {operetion === 'fatch' && (
            <RotatingLines
              strokeColor="#188ce8"
              strokeWidth="5"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          )}
          <ContactList />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
