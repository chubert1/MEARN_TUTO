import { useDispatch } from "react-redux"
import {deleteProduct} from '../features/products/productSlice'
import {AiFillDelete} from 'react-icons/ai'

const ProductItem = ({product}) => {
  const dispatch = useDispatch();
  return (
   <div className="product">
   <div>
   {new Date(product.createdAt).toLocaleString('en-GB')}
   </div>
   <h2>{product.text} </h2>
   <button 
   onClick={() => dispatch(deleteProduct(product._id))}
   className="close"><AiFillDelete /></button>
   </div>
  )
}

export default ProductItem