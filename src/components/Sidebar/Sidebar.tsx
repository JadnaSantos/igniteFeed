import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react'
import { Avatar } from "../Avatar/Avatar";


export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRldnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40" alt="" />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/JadnaSantos.png"/>
                <strong>Jadna Silva</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}