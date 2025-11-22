export const certificates = [
  // Users can drop PNG files into public/certificates and reference them here
  {
    file: '/certificates/ssoc-piyush.png',
    title: 'SSoC Certificate',
    issuer: 'Summer of Code (SSoC)',
    date: '2025-10-10',
  },
  {
    file: '/certificates/example-certificate-1.png',
    title: 'Example Certificate 1',
    issuer: 'Example Issuer',
    date: '2024-01-01',
  },
  {
    file: '/certificates/example-certificate-2.png',
    title: 'Example Certificate 2',
    issuer: 'Example Issuer',
    date: '2023-08-01',
  },
  {
    file: '/certificates/ssoc-certificate.png',
    title: 'SSoC Participation Certificate',
    issuer: 'SSoC',
    date: '2025-10-10',
  },
];

// Named export for cleaner usage
export const AchievementsConfig = {
  certificates,
};
