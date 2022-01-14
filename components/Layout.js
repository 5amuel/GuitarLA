import Head from "next/head"
import Header from "./Header"
export default function Layout ({children, pagina}) {
    return(
        <div>
            <Head>
                <title>GutarLA - {pagina}</title>
            </Head>
            <Header />
            {children}
        </div>
    )
}