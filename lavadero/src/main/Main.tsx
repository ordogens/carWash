import styles from "./main.module.css";
import { Sparkles,Droplets } from "lucide-react";

export const Main = () => {
  return (
    <section className={styles.main}>
      <article className={styles.wash}>
        <h1>
          El mejor <span style={{ color: "#155dfc" }}>lavadero</span> de la
          ciudad
        </h1>
        <p className={styles.parrafo}>
          Ofrecemos servicios profesionales de lavado para carros, camionetas y
          motos. Tu vehículo brillará como nuevo con nuestros tratamientos
          especializados
        </p>
        <article className={styles.buttons}>
            <button className={styles.azul}>ver servicios</button>
            <button className={styles.blanco}>Contactar ahora</button>
        </article>

        <article className={styles.lavados}>
            <div className={styles.uno}><Sparkles size={30} style={{ color: "#155dfc" }} />
            <h3>Lavado Ecológico</h3>
            <p>Productos biodegradables</p>
            </div>
            <div className={styles.uno}><Droplets size={30} style={{ color: "#155dfc" }} />
            <h3>Resultado Garantizado</h3>
            <p>100% satisfacción</p>
            </div>

        </article>

      </article>

      <article className={styles.car}>
        <h1>nada</h1>
      </article>
    </section>
  );
};
