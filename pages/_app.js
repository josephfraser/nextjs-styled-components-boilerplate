import App from 'next/app';
import React from 'react';
import Page from '../components/Page';

class SA extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default SA;
