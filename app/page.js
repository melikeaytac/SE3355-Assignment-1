import Recommendations from '../components/Recommendations';
import Campaigns from '@/components/Campaigns';
import ElectronicsSection from '@/components/electronicssection';
import VisitedProducts from '@/components/VisitedProducts';


export default function HomePage() {
  return (
    <main>
        
        <Campaigns />
        <ElectronicsSection />
        
        <Recommendations />
        <VisitedProducts/>
        <footer className="text-center py-4 mt-5 border-top text-muted" style={{ fontSize: '14px' }}>
  © 2025 E-Commerce-Site | Developed by Melike Aytaç
</footer>

    </main>
  );
}
