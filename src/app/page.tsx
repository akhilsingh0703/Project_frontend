import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  BookOpen,
  Scale,
  GraduationCap,
  Globe,
  DollarSign,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { UniversityCard } from '@/components/UniversityCard';
import { getUniversities } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  const featuredUniversities = getUniversities().slice(0, 6);

  const howItWorks = [
    {
      icon: Search,
      title: 'Search Universities',
      description:
        'Use our powerful search and filters to discover universities that match your criteria.',
    },
    {
      icon: Scale,
      title: 'Compare Side-by-Side',
      description:
        'Select up to three universities and compare them on key aspects to see how they stack up.',
    },
    {
      icon: GraduationCap,
      title: 'Make Informed Decisions',
      description:
        'Access detailed information and make a choice that aligns with your academic and career goals.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Find & Compare Universities Worldwide
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your journey to higher education starts here. Search, compare, and
            choose the perfect university for you.
          </p>
          <div className="mt-10 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-2">
                    <Input
                      type="text"
                      placeholder="University name or location..."
                      className="h-12 text-base"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                   <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                 <div className="mt-4 flex justify-center">
                   <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Search Universities
                  </Button>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Universities Section */}
      <section id="featured" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Universities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore top-rated universities from around the globe.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/universities">
                Browse All Universities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Simple Steps to Your Future
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our streamlined process makes finding your dream university easier
              than ever.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center shadow-sm">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative isolate overflow-hidden bg-accent/90 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
            <h2 className="font-headline mx-auto max-w-2xl text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-accent-foreground/80">
              Begin your search today and take the first step towards your
              future. Our comparison tool is waiting to help you decide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/compare">
                  Start Comparing Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e09d5c44437)" fillOpacity="0.7"></circle>
              <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e09d5c44437">
                  <stop stopColor="#A7D1FF"></stop>
                  <stop offset="1" stopColor="#4B0082" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
