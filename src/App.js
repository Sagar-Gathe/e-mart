import "./App.css";
import { useEffect, useState } from "react";
import Category from "./Component/Category";
import { getCategories, getProducts } from "./fetcher";
import CategoryProducts from "./Component/CategoryProducts";
function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  const [product, setProduct] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };

    fetchData();
  }, []);

  const handelCategoryClick = (id) => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProduct(responseObject);
    };

    fetchData();
  };

  const renderCategories = () => {
    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        title={c.title}
        onCategoryClick={() => handelCategoryClick(c.id)}
      />
    ));
  };

  const renderProduct = () => {
    return product.data.map((p) => 
      <CategoryProducts{...p}>{p.title}</CategoryProducts>
    );
  };

  return (
    <>
       <div className="container">
      <header>My Store</header>

      <section  className="content">
        <nav>
          {categories.errorMessage && (
            <div>Error : {categories.errorMessage}</div>
          )}
          {categories.data && renderCategories()}
        </nav>

        <main>
          <h1>Products</h1>
          {product.errorMessage && <div>Error : {product.errorMessage}</div>}
          {product && renderProduct()}
        </main>
      </section>

      <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
