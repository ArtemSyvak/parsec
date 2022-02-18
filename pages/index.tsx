import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Showreel from '../src/components/Showreel'
import Fullpage from '../src/components/Fullpage';

const Page = (props: any) => (
  <div className="fp-section" id={props.id} style={props.style}>
    {props.children}
  </div>
)

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Parsec Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Fullpage>
          <Page id="first">
            <Showreel />
          </Page>
          <Page id="second" style={{backgroundColor: 'red'}}>
            <div>PRIVET RAZ</div>
          </Page>
          <Page id="third" style={{backgroundColor: 'yellow'}}>
            <div>PRIVET DVA</div>
          </Page>
          <Page id="sasat" style={{backgroundColor: 'green'}}>
            <div>SASAT` NAHUY!!!!!!!</div>
          </Page>
        </Fullpage>
      </main>
    </div>
  )
}

export default Home
