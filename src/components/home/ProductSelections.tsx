import CoffeeSection from './CoffeeSelections';
import TeaSection from './TeaSelections';

const ProductSelections = () => {
  return (
    <div className="bg-gray-50 py-16">
      <CoffeeSection />
      <TeaSection />
    </div>
  );
};

export default ProductSelections;