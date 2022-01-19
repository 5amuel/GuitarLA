import Layout from "../components/Layout"
import Image from "next/image"
import styles from '../styles/Nosotros.module.css'
export default function Nosotros (){
    return (
        <Layout pagina="Nosotros">
            <main className="contenedor">
                <h2 className="heading"> Nosotros </h2>
                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre Nosotros"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et interdum tellus. Aliquam tristique volutpat ex, in egestas ipsum ultrices ac. Integer condimentum nisl a tristique semper. Sed non pulvinar nunc. Sed efficitur pretium rhoncus. Duis ex nisl, faucibus at elit nec, iaculis rhoncus libero. Quisque varius imperdiet felis eu lacinia. Quisque porta consectetur purus, eget tincidunt lorem blandit quis. Praesent scelerisque ex at dolor volutpat, quis consequat nisi posuere.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et interdum tellus. Aliquam tristique volutpat ex, in egestas ipsum ultrices ac. Integer condimentum nisl a tristique semper. Sed non pulvinar nunc. Sed efficitur pretium rhoncus. Duis ex nisl, faucibus at elit nec, iaculis rhoncus libero. Quisque varius imperdiet felis eu lacinia. Quisque porta consectetur purus, eget tincidunt lorem blandit quis. Praesent scelerisque ex at dolor volutpat, quis consequat nisi posuere.</p>

                    </div>
                </div>
            </main>
        </Layout>
    )
}