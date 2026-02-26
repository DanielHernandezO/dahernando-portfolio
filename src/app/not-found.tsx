import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="mb-4 text-8xl font-bold text-accent-primary">404</p>
          <h1 className="mb-4 text-2xl font-bold">Page Not Found</h1>
          <p className="mb-8 text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button href="/" variant="primary" size="lg">
            Go Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
