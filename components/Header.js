import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header () {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div><Image src="/img/logo.svg" width={400} height={100} /></div>
                <nav>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
            </div>
        </header>
    )
}