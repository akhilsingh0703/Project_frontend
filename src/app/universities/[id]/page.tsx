import { getUniversityById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Badge,
  DollarSign,
  Globe,
  MapPin,
  Building,
  Users,
  Percent,
  GraduationCap,
  Scale,
  Calendar,
  BookOpen,
  Home,
  FileText,
  Landmark,
  ClipboardCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { AddToCompareButton } from '@/components/AddToCompareButton';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Summary } from './Summary';

export default function UniversityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const university = getUniversityById(params.id);

  if (!university) {
    notFound();
  }

  const mapImage = PlaceHolderImages.find((img) => img.id === 'map-placeholder');

  const quickFacts = [
    { label: 'Acceptance Rate', value: `${university.quickFacts.acceptanceRate}%`, icon: Percent },
    { label: 'GPA', value: university.quickFacts.gpa || 'N/A', icon: GraduationCap },
    { label: 'SAT Range', value: university.quickFacts.satRange || 'N/A', icon: ClipboardCheck },
    { label: 'Student-Faculty Ratio', value: university.quickFacts.studentFacultyRatio, icon: Scale },
    { label: 'Graduation Rate', value: `${university.quickFacts.graduationRate}%`, icon: GraduationCap },
    { label: 'Student Population', value: university.studentPopulation.toLocaleString(), icon: Users },
  ];

  const admissionInfo = [
    { label: 'Application Deadline', value: university.admissions.deadline },
    { label: 'Application Fee', value: `$${university.admissions.applicationFee}` },
    { label: 'Required Documents', value: university.admissions.requiredDocuments.join(', ') },
    { label: 'International Students', value: university.admissions.internationalRequirements },
  ];

  return (
    <div className="bg-background">
      {/* Header Section */}
      <header className="relative h-64 md:h-80 w-full">
        <Image
          src={university.images.banner}
          alt={`${university.name} banner`}
          fill
          className="object-cover"
          data-ai-hint="university campus"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
               <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden border-4 border-background bg-background shadow-lg -mt-16 md:-mt-24 shrink-0">
                <Image
                  src={university.images.logo}
                  alt={`${university.name} logo`}
                  fill
                  className="object-contain p-2"
                  data-ai-hint="logo crest"
                />
              </div>
              <div className="flex-grow">
                <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
                  {university.name}
                </h1>
                <div className="flex items-center text-lg mt-2 space-x-4">
                  <span className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> {university.location.city}, {university.location.country}</span>
                  <a href={university.website} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <Globe className="h-5 w-5 mr-2" /> Visit Website
                  </a>
                </div>
              </div>
              <div className="mt-4 md:mt-0 w-full md:w-auto shrink-0">
                <AddToCompareButton universityId={university.id} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center"><BookOpen className="mr-3 text-accent"/>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <Badge variant="outline" className="flex items-center gap-2"><Calendar className="h-4 w-4"/> Est. {university.establishedYear}</Badge>
                  <Badge variant="outline" className="flex items-center gap-2"><Building className="h-4 w-4"/> {university.type}</Badge>
                  <Badge variant="outline" className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {university.setting}</Badge>
                </div>
                <Summary description={university.description} />
              </CardContent>
            </Card>

            {/* Programs & Majors */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center"><GraduationCap className="mr-3 text-accent"/>Programs & Majors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {university.programs.map((program) => (
                    <div key={program.name} className="p-4 border rounded-lg bg-background">
                      <h4 className="font-semibold">{program.name}</h4>
                      <p className="text-sm text-muted-foreground">{program.department}</p>
                      <p className="text-xs text-muted-foreground mt-2">{program.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

             {/* Tuition & Aid */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center"><DollarSign className="mr-3 text-accent"/>Tuition & Financial Aid</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Undergraduate</p>
                      <p className="text-2xl font-bold font-headline">${university.tuition.undergraduate.toLocaleString()}</p>
                  </div>
                   <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Graduate</p>
                      <p className="text-2xl font-bold font-headline">${university.tuition.graduate.toLocaleString()}</p>
                  </div>
                   <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Room & Board</p>
                      <p className="text-2xl font-bold font-headline">${university.tuition.roomAndBoard.toLocaleString()}</p>
                  </div>
                  <div className="md:col-span-3">
                      <h4 className="font-semibold flex items-center justify-center"><Landmark className="mr-2"/>Financial Aid</h4>
                      <p className="text-muted-foreground mt-2 text-sm">{university.financialAid.details}</p>
                  </div>
              </CardContent>
            </Card>

            {/* Campus Life */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center"><Home className="mr-3 text-accent"/>Campus Life</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {university.images.campus.map((imgSrc, i) => (
                        <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                             <Image src={imgSrc} alt={`Campus life ${i+1}`} fill className="object-cover"/>
                        </div>
                    ))}
                 </div>
              </CardContent>
            </Card>

            {/* Admissions */}
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center"><FileText className="mr-3 text-accent"/>Admission Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {admissionInfo.map(info => (
                             <li key={info.label} className="flex flex-col sm:flex-row">
                                <strong className="w-full sm:w-1/3 shrink-0">{info.label}</strong>
                                <span className="text-muted-foreground">{info.value}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
             </Card>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8 sticky top-24 self-start">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {quickFacts.map((fact) => (
                    <li key={fact.label} className="flex items-start">
                      <fact.icon className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                      <div>
                        <span className="font-semibold">{fact.value}</span>
                        <p className="text-sm text-muted-foreground">{fact.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Campus Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{university.map.address}</p>
                {mapImage && (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <a href={`https://www.google.com/maps?q=${university.map.lat},${university.map.lng}`} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={mapImage.imageUrl}
                        alt="Campus map"
                        width={1200}
                        height={400}
                        className="object-cover"
                        data-ai-hint={mapImage.imageHint}
                      />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
