'use client';

import { useState } from 'react';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface UniversityListProps {
  allUniversities: University[];
}

export function UniversityList({ allUniversities }: UniversityListProps) {
  const [filters, setFilters] = useState({
    state: 'all',
    courseType: 'all',
    stream: 'all',
    feeRange: 'all',
  });

  // Note: Filtering logic is not fully implemented based on the new UI.
  const filteredUniversities: University[] = [];

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Select
          value={filters.state}
          onValueChange={(value) => setFilters({ ...filters, state: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="ca">California</SelectItem>
            <SelectItem value="tx">Texas</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={filters.courseType}
          onValueChange={(value) => setFilters({ ...filters, courseType: value })}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Course Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
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
            <SelectItem value="all">All Streams</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="management">Management</SelectItem>
            <SelectItem value="commerce">Commerce</SelectItem>
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
            <SelectItem value="low">Less than $20,000</SelectItem>
            <SelectItem value="medium">$20,000 - $50,000</SelectItem>
            <SelectItem value="high">More than $50,000</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <input type="checkbox" />
              </TableHead>
              <TableHead>University</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Course Type</TableHead>
              <TableHead>Stream</TableHead>
              <TableHead>Fee Range</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((uni) => (
                <TableRow key={uni.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{uni.name}</TableCell>
                  <TableCell>{uni.location.city}</TableCell>
                  <TableCell>{uni.type}</TableCell>
                  <TableCell>{uni.popularPrograms[0]}</TableCell>
                  <TableCell>${uni.tuition.undergraduate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No universities found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
