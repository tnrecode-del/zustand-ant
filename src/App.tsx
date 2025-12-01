import React from 'react';
import { useStore } from '@/stores/useStore';

const App: React.FC = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease); 

  return (
    <div>
      <h1>Hello, Zustand with Ant Design!</h1>

      <input type="button" onClick={decrease} value={"-"} />
      {count}
      <input type="button" onClick={increase} value={"+"} />
    </div>
  );
}

export default App;