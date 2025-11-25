import Image from 'next/image';
import Link from 'next/link';
import type { University } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Percent, Users, ArrowRight } from 'lucide-react';
import { AddToCompareButton } from './AddToCompareButton';

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/universities/${university.id}`}>
          <div className="relative h-48 w-full">
            <Image
              src={university.images.banner}
              alt={`${university.name} banner`}
              fill
              className="object-cover"
              data-ai-hint="university campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden border-2 border-background bg-background shadow-md">
                <Image
                  src={university.images.logo}
                  alt={`${university.name} logo`}
                  fill
                  className="object-contain p-1"
                  data-ai-hint="logo crest"
                />
              </div>
            </div>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Link href={`/universities/${university.id}`}>
          <CardTitle className="font-headline text-xl hover:text-accent transition-colors">
            {university.name}
          </CardTitle>
        </Link>
        <div className="flex items-center text-muted-foreground text-sm mt-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span>
            {university.location.city}, {university.location.country}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {university.popularPrograms.slice(0, 3).map((program) => (
                <Badge key={program} variant="secondary">{program}</Badge>
            ))}
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
                <Percent className="h-4 w-4 mr-2 text-accent" />
                <div>
                    <p className="font-semibold">{university.quickFacts.acceptanceRate}%</p>
                    <p className="text-xs text-muted-foreground">Acceptance</p>
                </div>
            </div>
            <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-accent" />
                <div>
                    <p className="font-semibold">₹{(university.tuition.undergraduate / 1000).toFixed(0)}k</p>
                    <p className="text-xs text-muted-foreground">Tuition (UG)</p>
                </div>
            </div>
        </div>

      </CardContent>
      <CardFooter className="p-6 pt-0 bg-transparent flex justify-between gap-2">
        <AddToCompareButton universityId={university.id} />
        <Button asChild variant="outline">
          <Link href={`/universities/${university.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
