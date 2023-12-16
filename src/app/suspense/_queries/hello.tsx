import { api } from "@/trpc/server";

export async function Hello() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  return (
    <p className="text-2xl text-white">
      {hello ? hello.greeting : "Loading tRPC query..."}
    </p>
  );
}

