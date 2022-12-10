import './App.css';




import { Heading } from '@chakra-ui/react'
import { PassConfiguration } from './components/passConfiguration/PassConfiguration';
import { PassView } from './components/passView/PassView';
import { ContextPassword } from './components/contextPassword/ContextPassword';
import { FooterJsa } from './components/footer/FooterJsa';

function App() {
  return (
      <ContextPassword>
        <div className="app-general">
          <Heading className='color-white'>Password Generator</Heading>
          <PassView/>
          <PassConfiguration/>
          <FooterJsa/>
        </div>
        
      </ContextPassword>
      
    
  );
}

export default App;
