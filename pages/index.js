import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {adminMenu} from '../constants/menu';

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    const paths = router.pathname.split("/");
    console.log("paths = "+paths);
    if(adminMenu.every(m => m.url !== paths[0])){
      router.push(`/${adminMenu[0].url}`);
    }
  },[]);
  return (
    <div>
      <Head>
        <title>ReenDocs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}