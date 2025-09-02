import Heading from '@/components/UI/Heading';
import AddProductForm from '../../../../components/products/AddProductForm';
import ProductForm from '@/components/products/ProductForm';
export default function createProductPage() {
  return (
    <>
      <Heading>Nuevo producto</Heading>

      <AddProductForm>
        <ProductForm/>
      </AddProductForm>
    </>
  )
}
