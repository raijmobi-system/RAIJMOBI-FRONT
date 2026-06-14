import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css"; 
import { css } from "../styled-system/css"; 

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk', 
});

export const metadata: Metadata = {
  title: "Raij Mobi - Início",
  description: "Plataforma de mobilidade Raij Mobi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      // Passamos a variável da fonte aqui para o HTML/CSS nativo conhecer o caminho dela
      className={`${hankenGrotesk.variable} ${css({ width: '100%' })}`} 
    >
      <body className={css({
        display: 'grid',
        backgroundColor: 'gray.50',

        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr',
        gridTemplateAreas: `
          "header"
          "main"
          "bottom"
        `,

        md: {
          gridTemplateRows: 'auto 1fr',
          // O Aside ocupa 240px na esquerda, o resto (1fr) vai para o Header/Main
          gridTemplateColumns: '80px 1fr',
          // O Aside ocupa toda a lateral esquerda (duas linhas de altura)
          gridTemplateAreas: `
            "aside header"
            "aside main"
          `,
        },
      })}>
        
        <header className={css({ bg: 'gray.800', color: 'white', py: '4' })}>
          <div className={css({ maxW: '6xl', mx: 'auto', textAlign: 'center', px: '4' })}>
            <h1 className={css({ fontSize: '3xl', fontWeight: 'bold' })}>{metadata.title as string}</h1>
          </div>
        </header>

        {/* Adicionei estilos básicos no aside para não quebrar a estrutura flex */}
        <aside
        className={css({
          gridArea: 'aside',
          background: 'gray.100',
          padding: '6',
          // Mobile: Esconde visualmente o conteúdo (o grid ignora a área)
          display: 'none',
          // Desktop: Faz a sidebar reaparecer
          md: { display: 'flex', flexDirection: 'column' },
        })}
      >
          <nav>
            <ul className={css({ display: 'flex', gap: '4', listStyle: 'none', p: 0 })}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </aside>

        {/* O flex: 1 garante que o main estique e empurre o footer para o final da tela */}
        <main className={css({ flex: '1', p: '4' })}>{children}</main>

        <footer className={css({
           gridArea: 'bottom',
          background: 'gray.200',
          padding: '4',
          display: 'flex',
          justifyContent: 'space-around',
          // Desktop: Some completamente do layout
          md: { display: 'none' },
           })}>
          <div className={css({ maxW: '6xl', mx: 'auto', textAlign: 'center', px: '4' })}>
            <p>&copy; {new Date().getFullYear()} Raij Mobi. Todos os direitos reservados.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}