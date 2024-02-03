export const metadata = {
  title: 'Y',
  description: 'Y Social Media Site',
}
import Link from "next/link"
import Cursor from "./components/Cursor"
import Eyes from "./components/Eyes"
import './globals.css'
export default function RootLayout({ children }) {
return (
<html lang="en">
  <body>
  <Eyes/>
  <Cursor/>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pages/posts">Posts</Link>
        <Link href="/pages/profile">Profile</Link>
        <Link href="/pages/people">People</Link>
        <Link href="/pages/games">Games</Link>
    </nav>
    {children}
  </body>
</html>)}
