import React from "react";
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({events}) {
    return (
        <Layout title='Home'>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map(evt =>
                <EventItem key={evt.id} evt={evt}/>
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const events = await fetch(`${API_URL}/api/events`)
        .then(res => res.json());

    return {
        props: {
            events,
        },
        revalidate: 1,
    }
}
