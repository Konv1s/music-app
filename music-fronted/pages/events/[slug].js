import React from 'react';
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import styles from '@/styles/Event.module.css';
import Link from "next/link";
import Image from "next/image";
import {FaPencilAlt, FaTimes} from "react-icons/fa";

const SlugMusic = ({evt}) => {

    const deleteEvent = (e) => {

    }

    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt/> Edit Event
                        </a>
                    </Link>
                    <a href="#" className={styles.delete} onClick={deleteEvent}>
                        <FaTimes />
                    </a>
                </div>

                <span>
                    {evt.date} at {evt.time}
                </span>
                <h1>{evt.name}</h1>
                {evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image} width={960} height={600} />
                    </div>
                )}

                <h3>Performers: </h3>
                <p>{evt.performers}</p>
                <h3>Description:</h3>
                <p>{evt.description}</p>
                <h3>Venue: {evt.venue}</h3>
                <p>{evt.address}</p>

                <Link href={`/events`}>
                    <a className={styles.back}>
                        {'<'} Back
                    </a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const events = await fetch(`${API_URL}/api/events`)
        .then(res => res.json());

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {slug}}) {
    const evt = await fetch(`${API_URL}/api/events/${slug}`)
        .then(res => res.json());

    console.log(slug)

    return {
        props: {
            evt: evt[0],
        },
        revalidate: 1,
    }
}

/*export async function getServerSideProps({query: {slug}}) {
    const evt = await fetch(`${API_URL}/api/events/${slug}`)
        .then(res => res.json());

    return {
        props: {
            evt: evt[0],
        }
    }
}*/

export default SlugMusic;