import { nanoid } from "nanoid";
import Link from "next/link";
import CreateDrop from "./CreateDrop";
import { getFakeDrops } from "#/lib/dynamoDb";

export default async function Page() {
  // for the real implementation, API routes will be used
  const fakeDrops = await getFakeDrops();

  return (
    <>
      <h3>DASHBOARD</h3>
      <CreateDrop drops={fakeDrops} />
      <h4>Your shared pages:</h4>
      <ul>
        {fakeDrops.map((page) => (
          <li key={page.id}>
            <Link href={`/dashboard/${page.id}`}>{page.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
