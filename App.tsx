import { ClosestBranchProvider } from './src/contexts';
import Home from './src/Home';

export default function App() {
  return (
    <ClosestBranchProvider>
      <Home />
    </ClosestBranchProvider>
  );
}
