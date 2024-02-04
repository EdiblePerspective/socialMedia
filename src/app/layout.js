export const metadata = {
  title: 'Noot',
  description: 'Noot Social Media Site',
}
import { ClerkProvider } from '@clerk/nextjs'
import Link from "next/link"
import Cursor from "./components/Cursor"
import Eyes from "./components/Eyes"
import { UserButton } from "@clerk/nextjs";

import './globals.css'
export default function RootLayout({ children }) {
return (
<ClerkProvider>
<html lang="en">
  <body>
  <div className="flex flex-row justify-evenly ">
    <h2>N</h2>
    <Eyes/>
    <h2>T</h2>
  </div>
  <Cursor/>
  <UserButton afterSignOutUrl="/"/>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pages/posts">Posts</Link>
        <Link href="/pages/profile">Profile</Link>
        <Link href="/pages/people">People</Link>
        <Link href="/pages/games">Games</Link>
    </nav>
    {children}
  </body>
</html>
</ClerkProvider>)}
