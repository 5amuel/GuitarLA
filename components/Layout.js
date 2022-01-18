import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
export default function Layout ({children, pagina}) {
    return(
        <div>
            <Head>
                <title>GutarLA - {pagina}</title>
            </Head>
            
            <Header />
                {children}
            <Footer />
        </div>
    )
}