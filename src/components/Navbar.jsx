import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const { user, logout } = useContext(AuthContext)

  const cartItems = useSelector(state => state.cart.cartItems)

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">

            {/* Logo */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white"
              >
                <img
                  src="/ShopNestLogo.png"
                  alt="ShopNest"
                  className="h-9 w-9 rounded-lg object-cover drop-shadow-[0_2px_8px_rgba(249,115,22,0.35)]"
                />

                <span>
                  ShopNest
                  <span className="text-orange-500 text-4xl leading-none">.</span>
                </span>
              </Link>
            </div>

            {/* Links */}
            <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-8">

              <li>
                <Link
                  to="/shop"
                  className="relative text-zinc-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:rounded after:transition-all hover:after:w-full"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="relative text-zinc-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:rounded after:transition-all hover:after:w-full"
                >
                  Cart ({cartItems.length})
                </Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className="relative text-zinc-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:rounded after:transition-all hover:after:w-full"
                    >
                      Hi, {user.name}
                    </Link>
                  </li>

                  {user.role === "admin" && (
                    <li>
                      <Link
                        to="/admin"
                        className="relative text-zinc-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:rounded after:transition-all hover:after:w-full"
                      >
                        Admin
                      </Link>
                    </li>
                  )}

                  <li>
                    <button
                      onClick={handleLogout}
                      className="border border-red-500/30 text-red-500 rounded-md px-4 py-2 font-semibold hover:bg-red-500/10 hover:border-red-500 transition duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="relative text-zinc-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:rounded after:transition-all hover:after:w-full"
                  >
                    Login
                  </Link>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar