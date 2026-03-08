import type { PropsWithChildren } from "react"
import { Link, Outlet } from "react-router-dom"

const NavBar = ({children}: PropsWithChildren) => {
  return (
    <section>
      <Link className="underline" to="/">[Back to Home]</Link>

      {children ?? <Outlet />}
    </section>
  )
}

export default NavBar