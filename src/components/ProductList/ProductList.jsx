import { products } from "../../constants"
import Product from "../Product/Product.jsx"
import "./ProductList.css"

const ProductList = () => {
  return (
    <ul className="product-list">
        {products.map((product) => (
            <li key={product.id}>
                <Product
                    image={product.img}
                    title={product.name}
                    variedad={product.variedad}
                    tostion={product.tostion}
                    peso={product.peso}
                />
          </li>
        ))}
    </ul>
  )
}

export default ProductList