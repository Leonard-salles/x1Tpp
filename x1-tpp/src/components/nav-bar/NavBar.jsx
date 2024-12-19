import React from 'react'

import { NavLink, Link } from "react-router";

import styles from "./NavBar.module.css"

import logo from "../../assets/LOGO_X1_TPP.png"

const NavBar = () => {
    return (
        <div className={styles.nav_container}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo tpp" />
            </Link>
            <nav className={styles.container_links}>
                {/* NavLink makes it easy to show active states */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.no_active
                    }
                >
                    Home
                </NavLink>


                <NavLink
                    to="/tabela"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.no_active
                    }
                >
                    Pontuação
                </NavLink>

                <NavLink
                    to="/tabela-jogos"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.no_active
                    }
                >
                    Jogos
                </NavLink>

            </nav>
        </div>
    )
}

export default NavBar