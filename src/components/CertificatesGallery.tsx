// CertificatesGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from './ui/dialog';

type Certificate = {
  file: string;
  title?: string;
  issuer?: string;
  date?: string;
};

interface CertificatesGalleryProps {
  certificates: Certificate[];
}

export default function CertificatesGallery({ certificates }: CertificatesGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.file} className="cursor-pointer" onClick={() => setActive(cert.file)}>
            <div className="relative w-full h-56 bg-muted/20 rounded overflow-hidden">
              <Image
                src={cert.file}
                alt={cert.title || 'certificate'}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-sm font-semibold">{cert.title}</h4>
              <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => { if (!open) setActive(null); }}>
        <DialogContent className="!max-w-[90vw] !max-h-[90vh] p-0 bg-transparent shadow-none rounded-none">
          <div className="w-full h-[80vh] flex items-center justify-center">
            {active && (
              <div className="relative w-full h-full">
                <Image src={active} alt="certificate" fill sizes="100vw" className="object-contain" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
