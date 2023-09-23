import { Menu } from 'lucide-react';
import MagneticComponent from './components/MagneticComponent';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      {/* Magnetic Component */}
      <div className='flex flex-col w-full h-screen items-center justify-center'>
        <MagneticComponent>
          <Button>
            <Menu />
          </Button>
        </MagneticComponent>
      </div>
    </>
  );
}

export default App;
