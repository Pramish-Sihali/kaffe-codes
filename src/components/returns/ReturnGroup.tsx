interface ReturnGroupProps {
    id: string;
    returnedOn: string;
    children: React.ReactNode;
  }
  
  const ReturnGroup = ({ id, returnedOn, children }: ReturnGroupProps) => {
    return (
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="px-8 py-4">
          <h3 className="text-[15px]">Returned on {returnedOn}</h3>
          <p className="text-[15px]">
            Order ID{' '}
            <span className="text-green-600 font-medium">{id}</span>
          </p>
        </div>
        <div className="divide-y border-t border-gray-200">
          {children}
        </div>
      </div>
    );
  };
  
  export default ReturnGroup;