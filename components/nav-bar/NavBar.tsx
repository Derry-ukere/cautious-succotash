import Link from 'next/link'
import styles from './NavBar.module.css'
import {signIn, signOut,useSession } from "next-auth/react"
import React from 'react'

export default function NavBar(){
  const {data : session, status} = useSession();
  const isLoggedin = status === 'authenticated';


  const handleSignin = (e :React.MouseEvent<HTMLElement>) =>{
    e.preventDefault();
    signIn()
  }

  const handleSignout = (e : React.MouseEvent<HTMLElement>) =>{
    e.preventDefault();
    signOut()
  }

    return (
        <nav className={styles.header}>
        <h1 className={styles.logo}>
          <a href='/'>NextAuth</a>
        </h1>
        <ul className={styles.mainNav}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        {!isLoggedin && <li>
            <Link href='/api/auth/signin'>
              <a onClick = {handleSignin}>
                Sign In
              </a>
            </Link>
          </li>}
           {isLoggedin && <li>
              <Link href='/api/auth/signout'>
                <a onClick = {handleSignout}>
                  Sign Out
                </a>
              </Link>
            </li>}
        </ul>
      </nav>
    )
}

