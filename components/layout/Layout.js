import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Head from 'next/head';

function Layout(props) {
  return (
    <>
     <Head>
        <title>Next Js Meetups</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Next Js Developer Meetups"
        ></meta>
       </Head> 
      <MainNavigation />
       <div className='container'> 
          <main className='main'>{props.children}</main>
       </div>
    </>
  );
}

export default Layout;
