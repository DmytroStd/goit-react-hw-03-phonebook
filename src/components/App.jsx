import { Component } from 'react';
import Form from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import Container from './container/Container';
import { HeroTitle } from './titles/HeroTitle';
import { SecondaryTitle } from './titles/SecondaryTitle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //hw 3.1
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  //

  submitContact = data => {
    if (this.isRepeat(data)) {
      return alert(`${data.name} : ${data.number} is already in list`);
    }

    // const newContact = {
    //   id: data.id,
    //   name: data.name,
    //   number: data.number,
    // };

    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  isRepeat({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findFilterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this;
    const filterContacts = this.findFilterContacts();

    return (
      <Container>
        <HeroTitle />
        <Form onSubmit={this.submitContact} contacts={contacts} />

        <SecondaryTitle />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
