import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export const SearchBox = ({ history }) => {
  const [keyWord, setKeyWord] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyWord.trim()) {
      history.push(`/search/${keyWord}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form
      onSubmit={submitHandler}
      className='border rounded-lg y-primary y-primary-border input-append'
    >
      <InputGroup>
        <Form.Control
          type='text'
          name='q'
          id='appendedInputButton'
          onChange={(e) => setKeyWord(e.target.value)}
          placehondler='Искать...'
          className='ml-m-5 border-0'
          style={{
            flexGrow: '2',
            height: `${window.innerWidth <= 769 ? '40px' : '54px'}`,
          }}
        ></Form.Control>
        <InputGroup.Append>
          <Button type='submit' className='y-primary btn'>
            Найти
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
