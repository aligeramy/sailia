export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-4xl font-semibold mb-4 text-black">
          Sailia.ca
        </h1>
        <p className="text-lg mb-6 text-black">
          Sail, Sail Cover & Marine Canvas (New & Reconditioning)
        </p>
        <p className="text-base mb-8 text-black">
          Kite, Wing & Canopy restoration
        </p>
        <div className="flex flex-col gap-3 text-base text-black">
          <p>(416) 823-7981</p>
          <p>
            <a href="mailto:info@sailia.ca" className="hover:underline">
              info@sailia.ca
            </a>
          </p>
          <p>
            <a href="https://www.sailia.ca" className="hover:underline">
              www.sailia.ca
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a href="https://instagram.com/sailia.ca" className="hover:underline">
              sailia.ca
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
