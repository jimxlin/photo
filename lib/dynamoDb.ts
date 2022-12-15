import { nanoid } from "nanoid";

const fakeDrops = [
  {
    id: nanoid(16),
  },
  {
    id: nanoid(16),
  },
  {
    id: nanoid(16),
  },
];

export const addFakeDrop = async (id: string): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id.length < 17) {
        fakeDrops.push({ id });
        res(id);
      } else {
        rej("id is too long");
      }
    }, 200);
  });
};

export const getFakeDrops = async (): Promise<{ id: string }[]> => {
  return new Promise((res, _rej) => {
    setTimeout(() => {
      res(fakeDrops);
    }, 200);
  });
};
