import React from 'react';
import styles from '@/styles/NotFound.module.css';
import Layout from "@/components/Layout";
import Link from "next/link";
import {FaExclamationTriangle} from 'react-icons/fa';

function NotFound404Page() {
    return (
        <Layout>
            <div className={styles.error}>
                <h1><FaExclamationTriangle/> Not found 404</h1>
                <h4>Sorry, there is nothing here</h4>
                <Link href={`/`}>Go back Home</Link>
            </div>
        </Layout>
    )
}

export default NotFound404Page;

