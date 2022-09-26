import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
color:var(--highlight-color);
position:relative;
user-select:none;
`

const HighlightSpan = styled.span`
color:var(--main-highlight-color);
`

const HomeSlogan = () => {
  return (
    <H1><HighlightSpan>Weather</HighlightSpan>App</H1>
  )
}

export default HomeSlogan