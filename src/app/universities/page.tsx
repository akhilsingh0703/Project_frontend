import { getUniversities } from '@/lib/data';
import { UniversityList } from './UniversityList';

export default function UniversitiesPage() {
  const universities = getUniversities();

  return (
    <>
      <header className="bg-primary/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Explore Universities
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find your perfect fit from our curated list of world-class institutions.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <UniversityList allUniversities={universities} />
        </div>
      </main>
    </>
  );
}
