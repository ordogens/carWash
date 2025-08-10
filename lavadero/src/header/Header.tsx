import styles from "./Header.module.css";
import { Car, Phone } from "lucide-react";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.h22} style={{ color: "#155dfc" }}>
        <Car style={{ color: "#155dfc" }} size={40} /> AutoLavado Pro
      </h2>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Precio</li>
          <li>Contactos</li>
        </ul>
      </nav>

      <div className={styles.btncall}>
        <button>
          <Phone /> Llamar ahora
        </button>
      </div>
    </div>
  );
};
