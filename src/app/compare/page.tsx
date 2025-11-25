import { ComparisonClient } from './ComparisonClient';

export default function ComparePage() {
  return (
    <>
      {/* Page Header */}
      <header className="bg-primary/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Compare Universities
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Select up to 3 universities to compare their features side-by-side.
          </p>
        </div>
      </header>

      {/* Comparison Content */}
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <ComparisonClient />
        </div>
      </main>
    </>
  );
}
