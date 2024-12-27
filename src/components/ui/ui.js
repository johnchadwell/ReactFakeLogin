import React, { useState } from 'react'
import { Button } from "@mui/material";
import './ui.css';

export function LoginButton({ children, onClick, disabled }) {
    return (
      <Button variant="contained" onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    );
  }
  export function LogoutButton({ children, onClick, disabled }) {
    return (
      <Button variant="contained" onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    );
  }
  
  export function Panel({ title, children }) {
    return (
      <section>
      <h1>{title}</h1>
        {children}
      </section>
    );
  }
