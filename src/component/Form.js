import React from 'react'

export default function Form(props) {
  const {onChange,onSubmit} = props;
  return (
      <form className="form-search" onSubmit={onSubmit}>
          <input className="form-input" onChange={onChange} type='text' name='search' placeholder='Search a gifs' />
          <input className="form-submit" type='submit' value='Search' />
      </form>
  );
}
