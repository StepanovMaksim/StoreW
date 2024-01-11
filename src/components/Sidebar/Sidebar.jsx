import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "../../styles/Sidebar.module.css";


const IconClothes = () => (
  <div className={styles.socials}>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="f7d">
  <path fill="currentColor" d="M6 15c0 4 .357 5 6 5s6-1 6-5c0-3.085-.136-3.886.202-4.263.21-.234.602-.305 1.322-.657 1.881-.92 1.881-1.08.47-3.58-.47-.833-1.41-2.5-3.291-2.5s-2.117.5-2.352 1c-.235.5-.47 1-2.351 1-1.87 0-2.113-.494-2.358-.992C9.395 4.506 9.147 4 7.212 4 5.416 4 4.476 5.667 4.006 6.5c-1.411 2.5-1.411 2.66.47 3.58.717.35 1.109.434 1.32.675.34.392.204 1.2.204 4.245Zm7-6h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2Z">

  </path>
</svg>

  </div>
)

const IconElectronic = () => (
  <div className={styles.socials}>
   
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>

  </div>
)

const IconFurniture = () => (
  <div className={styles.socials}>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="f7d" viewBox="1 1 22 22">
      <path fill="currentColor" d="M12 3c6.125 0 7 1 7 5.5 0 1-.069 1.267-1.5 1.615a3.225 3.225 0 0 0-1.539.846c-.3.3-.527.652-.684 1.039a8.684 8.684 0 0 0-.09.228c-.197.503-.263.672-.814.712C13.564 13 12.6 13 12 13c-.601 0-1.564 0-2.373-.06-.55-.04-.617-.209-.813-.712L8.724 12a3.123 3.123 0 0 0-.685-1.039 3.225 3.225 0 0 0-1.539-.846C5.069 9.767 5 9.5 5 8.5 5 4 5.875 3 12 3Z">
      </path>
      <path fill="currentColor" d="M18.5 11c-1.551 0-2.5.949-2.5 2.5 0 1-8 1-8 0 0-1.551-.949-2.5-2.5-2.5-1.551 0-2.5.949-2.5 2.5 0 1.182.551 2.014 1.5 2.344.066.023.123.041.173.057.15.05.232.075.276.131.052.066.051.172.051.403v.065c0 .99.286 1.613 1.282 1.989l-.263 1.315a1 1 0 0 0 1.962.392l.264-1.323c.961.091 2.19.127 3.755.127 1.31 0 2.384-.025 3.263-.087l.256 1.283a1 1 0 0 0 1.962-.392l-.234-1.169C18.627 18.283 19 17.631 19 16.5v-.065c0-.231 0-.337.05-.403.045-.056.126-.082.277-.13l.173-.058c.949-.33 1.5-1.162 1.5-2.344 0-1.551-.949-2.5-2.5-2.5Z">
      </path>
    </svg>

  </div>
)

const IconShoes = () => (
  <div className={styles.socials}>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="f7d"  viewBox="1 2 22 22">
      
      <path fill="currentColor" d="M11 6c1.074 0 2.292.288 3.5.768.513.204.734.334.182.843l-.536.535a.5.5 0 0 0 .708.708l.883-.884c.38-.381.427-.428.917-.136.46.274.346.486-.005.81l-.503.502a.5.5 0 0 0 .708.708l.565-.566c.278-.278.724-.47 1.27 0C20.065 10.476 21 11.816 21 13v.5c0 1.066-.46 1.5-1.5 1.5H8c-.924 0-.992-.255-1.15-.848A16.66 16.66 0 0 0 6.808 14a4 4 0 0 0-1.017-1.791A4 4 0 0 0 4 11.192c-.073-.02-.14-.039-.203-.055-.744-.2-.796-.215-.796-1.137C3 7.994 3.513 7.97 4.594 7.994 4.72 7.997 4.854 8 5 8c.57 0 .748.358.952.772C6.23 9.335 6.558 10 8 10c1.648 0 1.781-1.207 1.902-2.295C10 6.812 10.09 6 11 6Z">
      </path>
      <path fill="currentColor" d="M5.084 12.916c.288.288.518.65.676 1.084.24.662.17 1-.76 1h-.5c-.994 0-1.5-.505-1.5-1.5V13c0-1 .338-1 1-.76.434.158.796.388 1.084.676ZM20 16H4c-.5 0-.75 0-.875.125S3 16.5 3 17c0 1 1 1 2 1h14c1 0 2 0 2-1 0-.5 0-.75-.125-.875S20.5 16 20 16Z">
      </path>

      
    </svg>
    
  </div>
)

const IconOther = () => (
  <div className={styles.socials}>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
      <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
      <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
    </svg>

  </div>
)

const IconAll = ({num}) => (
  <div>
    {num == 0 ? <IconClothes /> : 
    num == 1 ? <IconElectronic /> :
    num == 2 ? <IconFurniture /> :
    num == 3 ? <IconShoes /> : <IconOther />}
  </div>
  
)

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  const catRus = ["Clothes", "Electronics", "Furniture", "Shoes", "Other"];



  return (

    
    <section className={styles.sidebar}>
      
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {catRus.map(( name, id ) => (
            <li key={id} >
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id+1}`}
              >
                <IconAll num={id} />
                <div className={styles.name}>{name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link} style={{ textDecoration: "underline" }}>
          Help
          
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
