"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { addFakeDrop } from "#/lib/dynamoDb";

export default function Page({ drops }: { drops: any }) {
  const router = useRouter();

  const createDrop = async () => {
    const newDropId = nanoid(16);
    const savedDropId = await addFakeDrop(newDropId);
    router.push(`/dashboard/${savedDropId}`);
  };

  return (
    <>
      <p>create drop component</p>
      <button onClick={createDrop}>Create a shared page</button>
    </>
  );
}
