import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <Card className="w-full max-w-lg border-black/20 shadow-lg">
        <CardContent className="flex flex-col items-center text-center px-12 py-16 space-y-8">
          <div className="space-y-3">
            <h1 className="text-6xl font-light text-black tracking-tight">
              Sailia.ca
            </h1>
            <Separator className="w-16 mx-auto" />
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-xl text-black/90 font-light tracking-wide">
              Sail, Sail Cover & Marine Canvas
            </p>
            <p className="text-lg text-black/70 font-light">
              New & Reconditioning
            </p>
            <p className="text-base text-black/60 font-light pt-2">
              Kite, Wing & Canopy restoration
            </p>
          </div>

          <Separator className="w-full my-4" />

          <div className="flex flex-col gap-5 text-base text-black/80 font-light">
            <p className="text-lg">(416) 823-7981</p>
            <p>
              <a
                href="mailto:info@sailia.ca"
                className="hover:text-black transition-colors duration-200"
              >
                info@sailia.ca
              </a>
            </p>
            <p>
              <a
                href="https://www.sailia.ca"
                className="hover:text-black transition-colors duration-200"
              >
                www.sailia.ca
              </a>
            </p>
            <p className="pt-2">
              Instagram:{" "}
              <a
                href="https://instagram.com/sailia.ca"
                className="hover:text-black transition-colors duration-200"
              >
                sailia.ca
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
