
import { currentUser } from '@clerk/nextjs';
export  default async function Home() {
  const user = await currentUser();
  return (
<>
<h2>Hello {user.username}</h2>
<h1>Why not Noot?</h1>
<p>Noot is the new totally original hit social media site that all the kids are raving about. It has this sleek black design so it must be good. So innovative.</p>
</>
  );
}
