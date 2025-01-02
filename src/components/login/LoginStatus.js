import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function LoginStatus() {
    const { LoggedIn, logout } = useAuth();

  return (
        // <div style={{width : '100%', height: '15vh'}}>
        <div>
        {LoggedIn ? (<>
        You are currently logged in.
            </>
            ) : (<>
        You are currently logged out.
            </>
            )}
        </div>

  )
}

export default LoginStatus