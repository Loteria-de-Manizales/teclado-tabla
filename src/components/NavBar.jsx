import { Link } from "react-router-dom";
import logo from "../assets/moneda-dorado.png";
import letras from "../assets/letras-dorado.png";
import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <img src={logo} className="App-logo" alt="logo" height={50} /> */}
          <img src={logo} className="App-logo" alt="logo" height={50} />
          <img
            src={letras}
            className="App-letras"
            alt="Lotería de Manizales"
            height={100}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/formulario-teclado"
                >
                  <h4>RESULTADOS EN VIVO</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
