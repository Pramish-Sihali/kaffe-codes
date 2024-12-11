export interface WishlistProduct {
    id: string;
    name: string;
    price: number;
    image: string;
  }
  
  export interface WishlistItemProps {
    product: WishlistProduct;
    isSelected: boolean;
    onSelect: () => void;
    onRemove: () => void;
    onAddToBag: () => void;
  }