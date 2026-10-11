import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppShell from '@/components/AppShell';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AntdRegistry>
          <AppShell>{children}</AppShell>
        </AntdRegistry>
      </body>
    </html>
  );
}