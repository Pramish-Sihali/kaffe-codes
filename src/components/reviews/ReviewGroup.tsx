interface ReviewGroupProps {
    brandName: string;
    purchaseDate: string;
    children: React.ReactNode;
  }
  
  const ReviewGroup = ({ brandName, purchaseDate, children }: ReviewGroupProps) => {
    return (
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="px-8 py-4 border-b border-gray-200">
          <h2 className="text-base font-medium">{brandName}</h2>
          <p className="text-sm text-gray-500 mt-1">Purchased on {purchaseDate}</p>
        </div>
        <div className="divide-y border-gray-200">
          {children}
        </div>
      </div>
    );
  };
  
  export default ReviewGroup;