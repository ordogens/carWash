import styles from "./main.module.css";
import { Sparkles,Droplets, Car } from "lucide-react";
import CarCleaners from '../assets/images/carCleaners.jpg'

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
          <div className={styles.uno}>
            <Sparkles size={40} style={{ color: "#155dfc" }} />
            <article className={styles.textos}>
              <h3>Lavado Ecológico</h3>
              <p>Productos biodegradables</p>
            </article>
          </div>
          <div className={styles.uno}>
            <Droplets size={40} style={{ color: "#155dfc" }} />
            <article className={styles.textos}>
              <h3>Resultado Garantizado</h3>
              <p>100% satisfacción</p>
            </article>
          </div>
        </article>
      </article>

      <article className={styles.car}>
        <picture>
          <img className={styles.carImageContainer} src={CarCleaners} alt="" />
        </picture>

        <div className={styles.badgeCar}>
          <Car style={{ color: "#155dfc" }} size={40} />
          <div className={styles.paragraphs}>
            <p>500+</p>
            <p>Vehículos lavados</p>
          </div>
        </div>
      </article>
    </section>
  );
};
