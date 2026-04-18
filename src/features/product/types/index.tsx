type Product = {
  id: number;
  name: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (id: number) => void;
}

interface ProductCard2Props {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (id: number) => void;
  maxCompare?: number;
  compareCount?: number;
}

interface ProductListProps {
  products: Product[];
  maxCompare?: number;
}

export type { Product, ProductCardProps, ProductCard2Props, ProductListProps };
