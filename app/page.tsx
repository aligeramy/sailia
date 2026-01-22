export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center text-center px-16 py-20 border-2 border-black rounded-none max-w-2xl w-full">
        <h1 className="text-5xl font-bold mb-6 text-black tracking-tight">
          Sailia.ca
        </h1>
        <p className="text-xl mb-3 text-black font-medium">
          Sail, Sail Cover & Marine Canvas
        </p>
        <p className="text-lg mb-2 text-black/80">
          New & Reconditioning
        </p>
        <p className="text-base mb-12 text-black/70">
          Kite, Wing & Canopy restoration
        </p>
        <div className="flex flex-col gap-4 text-lg text-black">
          <p className="font-medium">(416) 823-7981</p>
          <p>
            <a
              href="mailto:info@sailia.ca"
              className="hover:underline transition-all"
            >
              info@sailia.ca
            </a>
          </p>
          <p>
            <a
              href="https://www.sailia.ca"
              className="hover:underline transition-all"
            >
              www.sailia.ca
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/sailia.ca"
              className="hover:underline transition-all"
            >
              sailia.ca
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
