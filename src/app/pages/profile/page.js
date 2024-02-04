export const metadata = {
    title: 'Noot - Profile',
    description: 'Noot Social Media Site',
  }

export default async function Profile() {
  const user = await currentUser();
    return (
  <>
  <h1>Profile Placeholder</h1>
  <h3>Username: {user.username}</h3>
  <h3>Bio: </h3>
  <button>Edit Bio</button>
  </>
    );
  }