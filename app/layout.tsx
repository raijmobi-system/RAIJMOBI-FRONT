"use client";

import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css"; 
import { css } from "../styled-system/css"; 
import { Flex } from '../styled-system/jsx';
import {Heading,Text} from '../components/atoms/typography';
import {Avatar} from '../components/atoms/presentation';
import {Link} from '../components/atoms/action';
import { Opacity } from "@material-symbols-svg/react";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk', 
});



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

        <header className={css({ bg: 'gray.800', color: 'white', py: '4' ,display: 'flex',flexDirection: 'row',justifyContent:'space-between',px:'6',backgroundColor:'black',opacity:'1',})}>
          <Flex direction='column' >
            <Heading as='h3' color='green' className={css({ textAlign: 'center', mb: '2' })}>
              Olá, Usuário!
            </Heading>
            <Text className={css({ textAlign: 'center' })}>
              Para onde vai hoje?
            </Text>
          </Flex>
          <Link>
            <Avatar src="cliente.jpeg" size="lg" />
          </Link>

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