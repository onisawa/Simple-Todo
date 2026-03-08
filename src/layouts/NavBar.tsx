import type { PropsWithChildren } from "react"
import { NavLink, Outlet } from "react-router-dom"

const components = ['accordian', 'progressbar', 'starRating'];

const NavBar = ({children}: PropsWithChildren) => {
  return (
    <>
    <section className="flex justify-end items-center pt-10 px-20 gap-2">
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'underline'} to="/">[Home]</NavLink>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'underline'} to="/jobs">[Job Board]</NavLink>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'underline'} to="/components">[Components]</NavLink>

      <ul>
        {
          components.map((item, index) => (
            <li key={index}>
              <NavLink className={({isActive}) => isActive ? 'font-bold' : 'underline'} to={`/components/${item}`}>[{item}]</NavLink>
            </li>
          ))
        }
      </ul>
    </section>

      {children ?? <Outlet />}
    </>
  )
}

export default NavBar