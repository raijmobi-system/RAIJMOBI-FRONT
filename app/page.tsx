import { Flex } from '../styled-system/jsx';
import {SearchComponent} from '../components/organisms';
import { Tune, WandStars } from '@material-symbols-svg/react'; // Importados na instância!
export default function Home() {
  return (
    <Flex direction="column">
     
      <SearchComponent 
      placeholder="Filtrar relatórios..."
      showFilter={true}
      showAI={true}
      filterIcon={<Tune />}
      aiIcon={<WandStars />}/>
      
    </Flex>
  );
}