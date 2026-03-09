import type { PropsWithChildren } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const components = ['accordian', 'progressbar', 'starRating'];

const NavBar = ({children}: PropsWithChildren) => {
  return (
    <>
    <section className="flex justify-end items-center py-5 px-20 gap-4 bg-gray-50 text-gray-400">
      <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/">Home</NavLink>
      <hr className="vr" />
      <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/jobs">Job Board</NavLink>
      <hr className="vr" />

      <Menu as="div" className="relative inline-block">
        <MenuButton>
          <NavLink className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'} to="/components">Components<ChevronDownIcon aria-hidden="true" className="size-5.5" /></NavLink>
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {
              components.map((item, index) => (
                <MenuItem key={index}>
                  <NavLink className={({isActive}) => isActive ? 'sub-menu-active' : 'sub-menu'} to={`/components/${item}`}>{item}</NavLink>
                </MenuItem>
              ))
            }
          </div>
        </MenuItems>
      </Menu>
    </section>

      {children ?? <Outlet />}
    </>
  )
}

export default NavBar