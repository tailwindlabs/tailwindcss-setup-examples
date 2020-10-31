import React from 'react'
import NextApp from 'next/app'
import '../css/tailwind.css'
import '../css/components.css';
import '../css/utilities.css';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default App
