'use client';

import { useState, useMemo } from 'react';
import type { University } from '@/lib/types';
import { UniversityCard } from '@/components/UniversityCard';
import { FilterSidebar } from './FilterSidebar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { List, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface UniversityListProps {
  allUniversities: University[];
}

export function UniversityList({ allUniversities }: UniversityListProps) {
  const [filters, setFilters] = useState({
    name: '',
    country: 'all',
    tuition: 100000,
    type: [] as string[],
    acceptanceRate: 100,
  });
  const [sortBy, setSortBy] = useState('name-asc');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedUniversities = useMemo(() => {
    let universities = allUniversities.filter((uni) => {
      const nameMatch = uni.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const countryMatch =
        filters.country === 'all' || uni.location.country === filters.country;
      const tuitionMatch = uni.tuition.undergraduate <= filters.tuition;
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(uni.type);
      const acceptanceRateMatch =
        uni.quickFacts.acceptanceRate <= filters.acceptanceRate;

      return (
        nameMatch &&
        countryMatch &&
        tuitionMatch &&
        typeMatch &&
        acceptanceRateMatch
      );
    });

    universities.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'tuition-asc':
          return a.tuition.undergraduate - b.tuition.undergraduate;
        case 'tuition-desc':
          return b.tuition.undergraduate - a.tuition.undergraduate;
        case 'acceptance-asc':
          return a.quickFacts.acceptanceRate - b.quickFacts.acceptanceRate;
        case 'acceptance-desc':
          return b.quickFacts.acceptanceRate - a.quickFacts.acceptanceRate;
        default:
          return 0;
      }
    });

    return universities;
  }, [allUniversities, filters, sortBy]);

  const uniqueCountries = useMemo(() => {
    const countries = new Set(allUniversities.map(uni => uni.location.country));
    return Array.from(countries).sort();
  }, [allUniversities]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="hidden lg:block lg:w-1/4">
        <FilterSidebar filters={filters} setFilters={setFilters} uniqueCountries={uniqueCountries} />
      </div>

      <div className="w-full lg:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-muted-foreground text-sm">
            Showing {filteredAndSortedUniversities.length} of{' '}
            {allUniversities.length} universities
          </p>
          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                    <FilterSidebar filters={filters} setFilters={setFilters} uniqueCountries={uniqueCountries} />
                </SheetContent>
              </Sheet>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="name-desc">Name Z-A</SelectItem>
                <SelectItem value="tuition-asc">Tuition: Low to High</SelectItem>
                <SelectItem value="tuition-desc">Tuition: High to Low</SelectItem>
                <SelectItem value="acceptance-asc">Acceptance Rate: Low to High</SelectItem>
                <SelectItem value="acceptance-desc">Acceptance Rate: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <div className="hidden sm:flex rounded-md border p-1">
                <Button variant={view === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('grid')}>
                    <LayoutGrid className="h-4 w-4" />
                </Button>
                 <Button variant={view === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('list')}>
                    <List className="h-4 w-4" />
                </Button>
            </div>
          </div>
        </div>
        
        {filteredAndSortedUniversities.length > 0 ? (
          <div
            className={cn(
                'grid gap-6',
                view === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
            )}
          >
            {filteredAndSortedUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-lg">
                <h2 className="mt-4 text-xl font-semibold">No Universities Found</h2>
                <p className="mt-2 text-muted-foreground">
                    Try adjusting your filters to find what you're looking for.
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
