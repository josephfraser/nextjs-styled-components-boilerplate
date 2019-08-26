import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#ccc',
  },
};

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 80px;
`;

// CSS resets etc
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: #ccc;
  }
`;

const StyledLayout = styled.div`
  background: white;
`;

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Title>Im On Every Page</Title>
          <div>{children}</div>
          <GlobalStyle />
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
