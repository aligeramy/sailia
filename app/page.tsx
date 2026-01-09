import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-8">
      {/* Logo and Theme Toggle at the top */}
      <div className="mb-12 flex w-full max-w-4xl items-center justify-between">
        <Logo />
        <ThemeToggle />
      </div>

      {/* Content with different font sizes */}
      <div className="w-full max-w-4xl space-y-8">
        {/* Heading 1 - Argue font */}
        <h1 className="font-bold font-heading text-6xl text-foreground">
          Welcome to Sailia
        </h1>

        {/* Heading 2 - Argue font */}
        <h2 className="font-heading font-semibold text-4xl text-foreground">
          Beautiful Typography
        </h2>

        {/* Body text - EB Garamond */}
        <p className="font-body text-foreground/80 text-lg">
          This is body text using EB Garamond. It provides elegant readability
          for longer paragraphs and content. The font pairs beautifully with
          Argue for headings, creating a harmonious typographic experience.
        </p>

        {/* Heading 3 - Argue font */}
        <h3 className="font-heading font-medium text-2xl text-foreground">
          Medium Heading
        </h3>

        {/* More body text */}
        <p className="font-body text-base text-foreground/70">
          Here is some smaller body text. EB Garamond maintains its elegance
          even at different sizes, making it perfect for various content
          hierarchies.
        </p>

        {/* Heading 4 - Argue font */}
        <h4 className="font-heading font-normal text-foreground text-xl">
          Smaller Heading
        </h4>

        {/* Even smaller body text */}
        <p className="font-body text-foreground/60 text-sm">
          Small body text example. The combination of Argue and EB Garamond
          creates a sophisticated and readable design.
        </p>
      </div>
    </main>
  );
}
