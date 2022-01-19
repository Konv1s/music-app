import React from 'react';
import Head from "next/head";
import styles from '@/styles/Layout.module.css';
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "@/components/Showcase";
import {useRouter} from "next/router";


function Layout({title, keywords, description, children}) {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            {router.pathname === '/' && <ShowCase/>}

            <div className={styles.container}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Music',
    description: "find the latest and other",
    keywords: 'music, dj, edm, events',
}

export default Layout;