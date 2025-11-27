'use client';

import { useState, useEffect, useMemo, useId } from 'react';
import type { University } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { UniversityCard } from '@/components/UniversityCard';

interface UniversityListProps {
  allUniversities: University[];
}

export function UniversityList({ allUniversities }: UniversityListProps) {
  const searchParams = useSearchParams();
  const courseQuery = searchParams.get('course');

  const [filters, setFilters] = useState({
    state: 'all',
    type: 'all',
    stream: 'all',
    feeRange: 'all',
    course: courseQuery || 'all',
  });

  useEffect(() => {
    if (courseQuery) {
      setFilters(prevFilters => ({ ...prevFilters, course: courseQuery }));
    }
  }, [courseQuery]);

  const filteredUniversities = useMemo(() => {
    return allUniversities.filter(uni => {
      // Data integrity check
      if (!uni || !uni.location || typeof uni.location.state === 'undefined') {
        console.warn('Skipping university with malformed data:', uni);
        return false;
      }
        
      const stateMatch = filters.state === 'all' || uni.location.state === filters.state;
      const typeMatch = filters.type === 'all' || uni.type === filters.type;
      const streamMatch = filters.stream === 'all' || (uni.programs && uni.programs.some(p => p.department === filters.stream));

      // A simple fee range check, assuming tuition is a number.
      const feeMatch = filters.feeRange === 'all' || 
        (uni.tuition && typeof uni.tuition.undergraduate !== 'undefined' && (
          (filters.feeRange === 'low' && uni.tuition.undergraduate < 100000) ||
          (filters.feeRange === 'medium' && uni.tuition.undergraduate >= 100000 && uni.tuition.undergraduate <= 300000) ||
          (filters.feeRange === 'high' && uni.tuition.undergraduate > 300000)
        ));
        
      const courseMatch = filters.course === 'all' || 
        (uni.programs && uni.programs.some(p => p.name === filters.course)) || 
        (uni.courses && uni.courses.some(c => c.name === filters.course));

      return stateMatch && typeMatch && streamMatch && feeMatch && courseMatch;
    });
  }, [allUniversities, filters]);

  // Get unique values for filters
  const states = useMemo(() => ['all', ...Array.from(new Set(allUniversities.filter(u => u?.location?.state).map(u => u.location.state)))], [allUniversities]);
  const types = useMemo(() => ['all', ...Array.from(new Set(allUniversities.filter(u => u?.type).map(u => u.type)))], [allUniversities]);
  const streams = useMemo(() => ['all', ...Array.from(new Set(allUniversities.flatMap(u => u.programs?.map(p => p.department) || []).filter(Boolean)))], [allUniversities]);
  const listId = useId();

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 flex-wrap">
        <Select
          value={filters.state}
          onValueChange={(value) => setFilters({ ...filters, state: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((s, i) => <SelectItem key={`${listId}-state-${s}-${i}`} value={s}>{s === 'all' ? 'All States' : s}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={filters.type}
          onValueChange={(value) => setFilters({ ...filters, type: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="University Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t, i) => <SelectItem key={`${listId}-type-${t}-${i}`} value={t}>{t === 'all' ? 'All Types' : t}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={filters.stream}
          onValueChange={(value) => setFilters({ ...filters, stream: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Stream" />
          </SelectTrigger>
          <SelectContent>
             {streams.map((s, i) => <SelectItem key={`${listId}-stream-${s}-${i}`} value={s}>{s === 'all' ? 'All Streams' : s}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={filters.feeRange}
          onValueChange={(value) => setFilters({ ...filters, feeRange: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Fee Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ranges</SelectItem>
            <SelectItem value="low">Less than ₹1,00,000</SelectItem>
            <SelectItem value="medium">₹1,00,000 - ₹3,00,000</SelectItem>
            <SelectItem value="high">More than ₹3,00,000</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p>No universities found for the selected criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
