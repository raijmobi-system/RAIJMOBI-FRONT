"use client";

import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css"; 
import { css } from "@/styled-system/css"; 
import { Flex } from '@/styled-system/jsx';
import {Heading,Text} from '@/components/atoms/typography';
import {Avatar} from '@/components/atoms/presentation';
import {Link} from '@/components/atoms/action';
import { Opacity } from "@material-symbols-svg/react";
import { LinkImage } from "@/components/molecules";
import {  Search, DirectionsCar, Chat,Person} from '@material-symbols-svg/react';
import { Icon } from "@/components/atoms/presentation";
import Navigation from "@/components/fixed/Navigation";
import { usePathname } from 'next/navigation';
import StandardHeader from '@/components/fixed/StandardHeader'
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk', 
});
import DynamicHeader from "@/components/fixed/DynamicHeader"; // Importa o gerenciador que criamos acima



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
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

        <DynamicHeader/>

        

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
          <Navigation direction="column"/>
        </aside>

        <main className={css({ flex: '1',minWidth: '0',width: '100%', overflowX: 'hidden'})}>{children}</main>

        <footer className={css({
           gridArea: 'bottom',
          background: 'gray.200',
          padding: '4',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          // Desktop: Some completamente do layout
          md: { display: 'none' },
           })}>
          <Navigation direction="row"/>
        </footer>

      </body>
    </html>
  );
}