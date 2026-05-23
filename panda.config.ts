import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Confirma se você está usando pré-flight (um reset de CSS nativo do Panda)
  preflight: true,

  // Diz ao Panda onde procurar pelos seus componentes e páginas
  // Ajuste isso se você usar a pasta 'src' ou App Router do Next.js
  include: ["./components/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Arquivos para ignorar
  exclude: [],

  // OBRIGATÓRIO: Diz ao Panda para gerar a função 'styled' do React
  jsxFramework: 'react',

  // Onde ele vai salvar a pasta de tipos e funções
  outdir: "styled-system",
});
