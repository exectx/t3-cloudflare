import { api } from "@/trpc/server";

export async function GetLatest() {
  const start = Date.now();
  const latestPost = await api.post.getLatest.query();
  const duration = Date.now() - start;
  return (
    <>
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      Drizzle + Cloudflare D1 (us-east-1 Virginia) {duration}ms
    </>
  );
}

