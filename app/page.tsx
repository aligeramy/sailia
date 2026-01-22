import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <Card className="w-full max-w-lg border-black/20 shadow-lg">
        <CardContent className="flex flex-col items-center space-y-8 px-12 py-16 text-center">
          <div className="space-y-3">
            <h1 className="font-light text-6xl text-black tracking-tight">
              Sailia.ca
            </h1>
            <Separator className="mx-auto w-16" />
          </div>

          <div className="space-y-2 pt-4">
            <p className="font-light text-black/90 text-xl tracking-wide">
              Sail, Sail Cover & Marine Canvas
            </p>
            <p className="font-light text-black/70 text-lg">
              New & Reconditioning
            </p>
            <p className="pt-2 font-light text-base text-black/60">
              Kite, Wing & Canopy restoration
            </p>
          </div>

          <Separator className="my-4 w-full" />

          <div className="flex flex-col gap-5 font-light text-base text-black/80">
            <p className="text-lg">(416) 823-7981</p>
            <p>
              <a
                className="transition-colors duration-200 hover:text-black"
                href="mailto:info@sailia.ca"
              >
                info@sailia.ca
              </a>
            </p>
            <p>
              <a
                className="transition-colors duration-200 hover:text-black"
                href="https://www.sailia.ca"
              >
                www.sailia.ca
              </a>
            </p>
            <p className="pt-2">
              Instagram:{" "}
              <a
                className="transition-colors duration-200 hover:text-black"
                href="https://instagram.com/sailia.ca"
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
