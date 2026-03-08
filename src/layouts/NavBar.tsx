import type { PropsWithChildren } from "react"
import { Link, Outlet } from "react-router-dom"

const NavBar = ({children}: PropsWithChildren) => {
  return (
    <>
    <section className="flex justify-end items-center pt-10 px-20 gap-2">
      <Link className="underline" to="/">[Home]</Link>
      <Link className="underline" to="/jobs">[Job Board]</Link>
      <Link className="underline" to="/components">[Components]</Link>
    </section>

      {children ?? <Outlet />}
    </>
  )
}

export default NavBar