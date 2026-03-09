import type { PropsWithChildren } from "react"
import { NavLink, Outlet } from "react-router-dom"

const components = ['accordian', 'progressbar', 'starRating'];

const NavBar = ({children}: PropsWithChildren) => {
  return (
    <>
    <section className="flex justify-end items-center py-5 px-20 gap-4 bg-gray-50 text-gray-400">
      <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/">Home</NavLink>
      <hr className="vr" />
      <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/jobs">Job Board</NavLink>
      <hr className="vr" />
      <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/components">Components</NavLink>

      <ul>
        {
          components.map((item, index) => (
            <li key={index}>
              <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to={`/components/${item}`}>[{item}]</NavLink>
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