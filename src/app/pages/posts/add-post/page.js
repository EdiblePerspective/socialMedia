
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { currentUser } from '@clerk/nextjs';
import { redirect } from "next/navigation";
import SavePostButton from "./components/savePostButton";
export default function addPost(){
    async function handleAddPost(formData){
        const user = await currentUser();
        "use server";
        const title=formData.get("title");
        const content=formData.get("content");
        await sql`INSERT INTO posts (username, title, content) VALUES (${user.username},${title},${content})`;
        revalidatePath("/Posts");
        redirect("/Posts")}
    return(
        
        <div>
            <h2>Add Post</h2>
            <form action={handleAddPost}>
            <label htmlFor="title">Title</label>
            <input name="title" id="title" placeholder="Title" />
            
            <label htmlFor="content">Content</label>
            <input name="content" id="content" placeholder="Content" />
            <SavePostButton />
            </form>
            </div>
            );
}