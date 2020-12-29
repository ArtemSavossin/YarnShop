import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

export const SearchBox = ({ history }) => {
  const [keyWord, setKeyWord] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyWord.trim()) {
      history.push(`/search/${keyWord}`)
    } else {
      history.push("/")
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyWord(e.target.value)}
        placehondler='Поиск...'
        className='mr-sm-2 ml-m-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Поиск
      </Button>
    </Form>
  )
}
