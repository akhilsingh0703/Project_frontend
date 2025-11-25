import { getUniversities } from '@/lib/data';
import { UniversityList } from './UniversityList';

export default function UniversitiesPage() {
  const universities = getUniversities();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Universities
      </h1>
      <p className="mt-2 text-muted-foreground">
        Explore and find your future university.
      </p>
      <UniversityList allUniversities={universities} />
    </div>
  );
}
