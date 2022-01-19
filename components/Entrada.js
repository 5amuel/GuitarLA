import { formatearFecha } from '../helpers'
import Image from 'next/image'
import Link from 'next/link'

export default function Entrada({entrada}) {
    const {titulo, resumen, imagen, published_at, id} = entrada
    return(
        <div>
            <article>
                <Image width={800} height={600} layout='responsive' src={imagen.url} alt={`imagen blog ${titulo}`}/>
                <div>
                    <h1>{titulo}</h1>
                    <p>{formatearFecha(published_at)}</p>
                    <p>{resumen}</p>
                    <Link href={`/blog/${id}`}>Leer Entrada</Link>
                </div>
                
            </article>
        </div>
    )
}