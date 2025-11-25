import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './ContactForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Users, Database, HandHelping } from 'lucide-react';

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');

  const faqs = [
    {
      question: 'Is UniFriend free to use?',
      answer: 'Yes, UniFriend is completely free for students. Our mission is to provide accessible information to everyone, regardless of their financial background.',
    },
    {
      question: 'How accurate is the university data?',
      answer: 'We strive for the highest accuracy by sourcing data from official university APIs, government databases, and other reputable public sources. Our team also performs manual verification to ensure the data is up-to-date. However, we always recommend confirming details on the university\'s official website.',
    },
    {
      question: 'Can I save my comparisons?',
      answer: 'Currently, you can print, download a PDF, or share your comparison via email directly from the compare page. We are working on a feature to allow registered users to save their comparisons.',
    },
    {
      question: 'How often is the data updated?',
      answer: 'Our data is updated on a rolling basis. Major data points like tuition and acceptance rates are typically reviewed and updated annually, while other information is updated as it becomes available.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <header className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About UniFriend
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Empowering students everywhere to find their perfect university.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-foreground/90">
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p>
                UniFriend was born from a simple idea: every student deserves a
                fair chance at higher education. We are dedicated to breaking down
                barriers, especially for students from rural and low-income
                backgrounds who may lack access to comprehensive educational resources.
              </p>
              <p>
                Our mission is to provide a clear, easy-to-use platform that
                demystifies the university selection process. By offering
                transparent data, powerful comparison tools, and insights into
                financial aid, we aim to empower students to make informed
                decisions that shape a successful future.
              </p>
              <div className="mt-8 flex space-x-6">
                <div className="flex items-center">
                    <HandHelping className="h-8 w-8 text-accent mr-3"/>
                    <span className="font-semibold">Access for All</span>
                </div>
                <div className="flex items-center">
                    <Users className="h-8 w-8 text-accent mr-3"/>
                    <span className="font-semibold">Student-Focused</span>
                </div>
              </div>
            </div>
            {missionImage && (
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={1200}
                  height={800}
                  className="rounded-xl object-cover shadow-lg"
                  data-ai-hint={missionImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
       <section className="py-16 sm:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Database className="mx-auto h-12 w-12 text-accent" />
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Collect Data
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Transparency and accuracy are at the core of our platform. We
              gather information from a variety of trusted sources.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-xl font-semibold">University APIs</h3>
              <p className="mt-2 text-muted-foreground">
                We connect directly to official university data streams to get
                the most current information on programs and admissions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-xl font-semibold">Government Sources</h3>
              <p className="mt-2 text-muted-foreground">
                Data on accreditation, tuition trends, and graduation rates
                is often sourced from national educational databases.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-xl font-semibold">Manual Verification</h3>
              <p className="mt-2 text-muted-foreground">
                Our dedicated team regularly reviews and verifies data points
                to ensure accuracy and fill in any gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold">
                Get in Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Have questions or feedback? We&apos;d love to hear from you.
              </p>
              <Card className="mt-8">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-headline text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full mt-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
