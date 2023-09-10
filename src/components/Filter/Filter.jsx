import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunk';

const filterInputId = nanoid();

const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatchContact = useDispatch();

  useEffect(() => {
    dispatchContact(getContactsThunk()); 
  }, [dispatchContact]);

  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <Label>
        
          <Input
            type="text"
            name="filter"
            placeholder="Find contacts by name"
            value={value}
            onChange={handleChangeFilter}
            id={filterInputId}
          />
        </Label>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Your phonebook is empty. Add first contact!
        </div>
      )}
    </>
  );
};

export default Filter;
