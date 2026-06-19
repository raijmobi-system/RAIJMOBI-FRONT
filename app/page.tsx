"use client";

import { useState } from 'react';
import { Flex } from '../styled-system/jsx';
import { SearchComponent } from '../components/organisms';
import { Tune, WandStars } from '@material-symbols-svg/react';
import { Icon } from '../components/atoms/presentation';
import { Text } from '../components/atoms/typography';
import { Button, IconButton } from '../components/atoms/action';
import { CardComponent } from '@/components/molecules';
import { css } from "../styled-system/css"; 
import Modal from '../components/fixed/Modal'; 
import RideSummary from '@/components/template/RideSummary';

// 1. Importando o CarouselView no lugar do FrameComponent
import CarouselView from '../components/organisms/CarouselView'; // Ajuste a pasta se não for organisms

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Criando os cards das caronas para alimentar o carrossel
  const rideCards = [
    <CardComponent
  key="ride-1"
  direction='column'
  fullWidth={true} // <-- Adicione essa linha! Faz o card respeitar os 280px do Carousel
  hasPadding={false}
  Image={<img src='trajeto.png' alt="Trajeto" className={css({ height: '118px', w: '100%', maxH: '118px', objectFit: 'cover'})} />}
  content={
    <RideSummary 
      title="Kiwidi Express - Mossoró"
      seats="4/6 lugares"
      price="R$ 49,99"
      origin="Pau dos Ferros"
      destination="Rafael Fernandes"
    />
  }
  extraContent={
    <IconButton variant='detail' size='full' className={css({margin: '0.75rem'})}>
      <Text color='white'>Participar</Text>
    </IconButton>
  }
/>,
    // Duplicando o card para o carrossel ter o que rolar na tela
    <CardComponent
  key="ride-2"
  direction='column'
  fullWidth={true} // <-- Adicione essa linha! Faz o card respeitar os 280px do Carousel
  hasPadding={false}
  Image={<img src='trajeto.png' alt="Trajeto" className={css({ height: '118px', w: '100%', maxH: '118px', objectFit: 'cover'})} />}
  content={
    <RideSummary 
      title="Kiwidi Express - Mossoró"
      seats="4/6 lugares"
      price="R$ 49,99"
      origin="Pau dos Ferros"
      destination="Rafael Fernandes"
    />
  }
  extraContent={
    <IconButton variant='detail' size='full' className={css({margin: '0.75rem'})}>
      <Text color='white'>Participar</Text>
    </IconButton>
  }
/>,
<CardComponent
  key="ride-3"
  direction='column'
  fullWidth={true} // <-- Adicione essa linha! Faz o card respeitar os 280px do Carousel
  hasPadding={false}
  Image={<img src='trajeto.png' alt="Trajeto" className={css({ height: '118px', w: '100%', maxH: '118px', objectFit: 'cover'})} />}
  content={
    <RideSummary 
      title="Kiwidi Express - Mossoró"
      seats="4/6 lugares"
      price="R$ 49,99"
      origin="Pau dos Ferros"
      destination="Rafael Fernandes"
    />
  }
  extraContent={
    <IconButton variant='detail' size='full' className={css({margin: '0.75rem'})}>
      <Text color='white'>Participar</Text>
    </IconButton>
  }
/>
  ];

  return (
    <Flex aria-roledescription='decorative' direction="column" gap="4">
     
      <SearchComponent 
        placeholder="Filtrar relatórios..."
        showFilter={true}
        showAI={true}
        filterIcon={<Tune />}
        aiIcon={<WandStars />}
      />

      {/* 3. Utilizando o CarouselView passando os titleElements e os items */}
      <CarouselView
        titleElements={
          <Flex direction="row" align="center" gap="2">
            <Icon size='lg'>✨</Icon>
            <Text weight='bold' size='lg'>Pensado para você</Text>
          </Flex>
        }
        items={rideCards}
      />

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Detalhes do Relatório"
      >
        <Flex direction="column" gap="4">
          <Text>
            Este é o conteúdo do seu modal renderizado na tela. O tamanho da caixa branca se adaptou ao conteúdo.
          </Text>
          
          <Flex direction="row" gap="2" justify="flex-end">
            <Button onClick={() => setIsModalOpen(false)}>
              Fechar Modal
            </Button>
          </Flex>
        </Flex>
      </Modal>

    </Flex>
  );
}