import React, { useState, useCallback } from 'react';
import { Header, Form, Button, Input, Label } from './App.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  }, [onSubmit, query]);

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button>
          <Label>Search</Label>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
