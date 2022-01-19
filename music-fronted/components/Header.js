import React from "react";
import styles from '@/styles/Header.module.css';
import Link from "next/link";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>MusicPlus</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href={`/events`}>
                            <a>Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;