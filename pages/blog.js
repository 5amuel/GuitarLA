import Layout from "../components/Layout";
import Entrada from "../components/Entrada"

export default function blog({entries}) {
    // useEffect(() => {
    //     const consultarAPI = async() => {
    //         const url = 'http://localhost:1337/blogs'
    //         const response = await fetch(url)
    //         const result = await response.json()
    //         console.log(result)
    //     }
    //     consultarAPI();
    // }, [])
    return (
        <Layout pagina="Blog">
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div>
                    {entries.map(entry => (
                        <Entrada 
                            key={entry.id}
                            entrada={entry}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

    //Para obtener datos en NEXTJS, NextJS ya ofrece varias formas de obtener datos desde API
    //1. getStaticProps : obtiene los datos cuando se crea el build, (cuando se compila el proyecto), Se usa cuando la info NO cambia en cada request, ( ej. pagina informativa)
    //2. getStaticPaths : obtiene el listado de las paginas que se van a crear cuando se realiza el build, 
    //3. getServerSideProps : Los datos se obtienen en cada request. Usar cuando la info cambia continuamente, (ej. negocio de delivery ) 
export async function getStaticProps(){ 
    const url = 'http://localhost:1337/blogs'
    const response = await fetch(url)
    const entries = await response.json()
    console.log(entries) //resultados se muestran en consola de nextJS 

    return{
        props :{
            entries
        }
    }
}