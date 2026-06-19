'use client';

import React from "react";
import { css } from "../../styled-system/css";
import { Flex, Box } from "@/styled-system/jsx";
import { Text } from "@/components/atoms/typography";
import { Icon } from "@/components/atoms/presentation";
import { Group } from '@material-symbols-svg/react';

export interface RideSummaryProps {
  title: string;
  seats: string; 
  price: string; 
  origin: string;
  destination: string;
  iconName?: string; 
}

export default function RideSummary({
  title,
  seats,
  price,
  origin,
  destination,
}: RideSummaryProps) {
  return (
    <Flex direction="column" gap="4" w="100%" paddingInline='16px'>
      
      {/* Título Principal */}
      <Text  weight="bold" size="lg">
        {title}
      </Text>

      {/* Linha: Vagas e Preço */}
      <Flex justify="space-between" align="center">
        
        {/* Lado Esquerdo: Ícone + Lugares */}
        <Flex align="center"  gap="2" color="gray.600">
          <Icon>
            <Group/>
          </Icon>
          
          <Text weight="normal" color="muted">
            {seats}
          </Text>
        </Flex>

        {/* Lado Direito: Preço */}
        <Text weight="bold" size="lg">
          {price}
        </Text>
        
      </Flex>

      {/* Seção da Rota (Trajeto) */}
      <Flex gap="3" mt="1">
        
        {/* Coluna Visual da Linha do Tempo */}
        <Flex direction="column" align="center" mt="1">
          {/* Ponto de Partida (Círculo Vazado) */}
          <Box className={css({ w: '10px', h: '10px', borderRadius: 'full', border: '2px solid', borderColor: 'gray.500' })} />
          
          {/* Linha Conectora */}
          <Box className={css({ w: '2px', h: '20px', bg: 'gray.300', my: '2px' })} />
          
          {/* Ponto de Chegada (Círculo Preenchido) */}
          <Box className={css({ w: '10px', h: '10px', borderRadius: 'full', bg: 'gray.900' })} />
        </Flex>

        {/* Textos do Trajeto */}
        <Flex direction="column" justify="space-between" className={css({ h: '42px' })}>
          <Text className={css({ fontSize: '0.875rem', color: 'gray.700', lineHeight: '1' })}>
            {origin}
          </Text>
          <Text className={css({ fontSize: '0.875rem', color: 'gray.500', lineHeight: '1' })}>
            {destination}
          </Text>
        </Flex>

      </Flex>

    </Flex>
  );
}