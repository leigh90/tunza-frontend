import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { roboto_F } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_F.className} antialiased`}>
      {children}
      </body>
      <body>{children}</body>
    </html>
  );
}
