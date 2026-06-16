"use client"; // 1. Adicionado: Necessário para usar hooks de estado no Next.js (App Router)

import { useState } from 'react'; // 2. Adicionado: O hook que vai controlar o modal
import { Flex } from '../styled-system/jsx';
import { SearchComponent } from '../components/organisms';
import { Tune, WandStars, Stars2Fill, ForYouFill, ChevronBackwardFill, ChevronForwardFill } from '@material-symbols-svg/react';
import { FrameComponent } from '../components/organisms';
import { Icon } from '../components/atoms/presentation';
import { Text } from '../components/atoms/typography';
import { Button, Link, IconButton } from '../components/atoms/action';

// 3. Adicionado: Importação do seu Modal (verifique se o caminho está certinho)
import Modal from '../components/fixed/Modal'; 

export default function Home() {
  // 4. Adicionado: Criamos o estado que diz se o modal está visível (começa como false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Flex direction="column" gap="4"> {/* Coloquei um gap="4" opcional para espaçar os itens */}
     
      <SearchComponent 
        placeholder="Filtrar relatórios..."
        showFilter={true}
        showAI={true}
        filterIcon={<Tune />}
        aiIcon={<WandStars />}
      />

      <FrameComponent
        titleElements={
          <Flex direction="row" align="center" gap="2">
            <Icon size='lg'>
              <ForYouFill />
            </Icon>
            <Text>
              Para você
            </Text>
          </Flex>
        }
        actions={
          <Flex direction="row" gap="2">
            <IconButton><ChevronBackwardFill /></IconButton>
            <IconButton><ChevronForwardFill /></IconButton>
          </Flex>
        }
      >
        {/* Modifiquei o conteúdo do Frame para colocar o botão de abrir o modal */}
        <Flex direction="column" gap="4">
          <Text>
            NADAH
          </Text>
          
          {/* Botão que muda o estado para true, abrindo o Modal */}
          
        </Flex>
      </FrameComponent>

      {/* 5. Adicionado: A estrutura do Modal em si, que fica no final do JSX */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Detalhes do Relatório"
      >
        {/* Usando seus próprios componentes atômicos dentro do modal! */}
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