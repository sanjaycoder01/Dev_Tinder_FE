import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = useSelector((state) => state.user.user)
  console.log('Navbar - User from Redux:', user)
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">DevTinder</a>
    </div>
    <div className="flex gap-2">
      <div className="dropdown dropdown-end mx-5">
        <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2">
          {user && (
            <>
              <h1 className="text-base font-semibold">Welcome {user?.email}</h1>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  alt="Profile"
                  src={user.profilePhoto || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              <Link to="/profile">
              <span className="badge">Profile</span>
              </Link>
            </a>
          </li>
          <li><Link to="/settings">
            <span className="badge">Settings</span>
            </Link>
            </li>
          <li><Link to="/logout">
            <span className="badge">Logout</span>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar