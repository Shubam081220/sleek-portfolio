import fs from 'fs';
import path from 'path';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';
import CertificatesGallery from '@/components/CertificatesGallery';
import { certificates as configuredCertificates } from '@/config/Achievements';

export const metadata: Metadata = {
  ...getMetadata('/journey/certificates'),
  robots: { index: true, follow: true },
};

type Certificate = {
  file: string;
  title?: string;
  issuer?: string;
  date?: string;
};

export default function CertificatesPage() {
  const certDir = path.join(process.cwd(), 'public', 'certificates');
  let discovered: Certificate[] = [];
  try {
    if (fs.existsSync(certDir)) {
      const files = fs.readdirSync(certDir);
      discovered = files
        .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
        .map((f) => ({ file: `/certificates/${f}` }));
    }
  } catch {
    discovered = [];
  }

  const configured: Certificate[] = Array.isArray(configuredCertificates) ? configuredCertificates : [];
  const map = new Map<string, Certificate>();
  configured.forEach((c) => map.set(c.file, c));
  discovered.forEach((d) => {
    if (!map.has(d.file)) map.set(d.file, d);
  });

  const allCerts = Array.from(map.values());

  return (
    <Container className="py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Certificates & Achievements
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground px-4">
            A curated list of my certificates and notable achievements.
          </p>
        </div>
        <Separator />
        <CertificatesGallery certificates={allCerts} />
      </div>
    </Container>
  );
}
