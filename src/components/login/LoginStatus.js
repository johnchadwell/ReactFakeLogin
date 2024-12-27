import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function LoginStatus() {
    const { LoggedIn, logout } = useAuth();

  return (
        // <div style={{width : '100%', height: '15vh'}}>
        <div>
        {LoggedIn ? (<>
        You are currently logged in.
                {/* <NavLink onClick={logout} to={"/"}>
                    Logout
                </NavLink> */}
                {/* <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/errorboundary"}>Error Boundary</NavLink> */}
            </>
            ) : (<>
        You are currently logged out.
                {/* <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Sign Up</NavLink> */}
            
            </>
            )}
        </div>

  )
}

export default LoginStatus