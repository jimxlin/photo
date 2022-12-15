// using the 'drop' name: https://en.wikipedia.org/wiki/Dead_drop

export default function Page({ params }: { params: any }) {
  return (
    <>
      <h3>DROP {params.dropId}</h3>
      <div>QR code placeholder</div>
      <br />
      <input type="text" placeholder="notes on the drop" />
      <br />
      <input type="text" placeholder="expiration date" />
      <br />
      <button>publish</button>
      <br />
      <button>manually expire</button>
      <br />
      <button>delete</button>
    </>
  );
}
