import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
color:var(--main-highlight-color);
font-size:15rem;
padding: 0;
margin: 0;
user-select:none;
`

const H2 = styled.h2`
color:var(--highlight-color);
font-size:5rem;
padding: 0;
margin: 0;
user-select:none;
`

const NotFoundSlogan = () => {
  return (
    <>
    <H1>404</H1>
    <H2>Page Not Found</H2>
    </>
  )
}

export default NotFoundSlogan;