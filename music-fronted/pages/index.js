import React from "react";
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function Home({events}) {
    return (
        <Layout title='Home'>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map(evt =>
                <EventItem key={evt.id} evt={evt}/>
            )}

            {events.length > 0 && (
                <Link href={`/events`}>
                    <a className='btn-secondary'>View all Events</a>
                </Link>
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const events = await fetch(`${API_URL}/api/events`)
        .then(res => res.json());

    return {
        props: {
            events: events.slice(0, 3)
        },
        revalidate: 1,
    }
}
