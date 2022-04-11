import { NavLink } from "react-router-dom";

import Container from "../Container";
import styles from "./Navbar.module.css";
import Logo from "../../../images/costs_logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <NavLink to={"/"}>
          <img src={Logo} alt="Costs" />
        </NavLink>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={"/projetos"}>Projetos</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={"/sobre"}>Sobre</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={"/contato"}>Contato</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
