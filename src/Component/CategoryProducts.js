import React from "react";

const Category_products = ({ title, imageUrl, specs , dimension, feature, price,stock }) => {

  return (
    <article>
      <div className="category_product-title">{title}</div>
      <figure>
        <div className="category-product-image-conatiner">
          <img src={`./asset/${imageUrl}`} alt={title} />
        </div>
      </figure>

      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimentions</h3>
          <label>{specs.dimension}</label>
        </div>

        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className="category-product-info-feature">
          <h3>Features</h3>
          <ul  className="features-list">
            {feature?.map((f) => {
              return <li>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-finance-price">&pound;{price}</div>
      </aside>

      <div className="category-product-info-stock">
        <label>Stock Level : {stock}</label>
        <label>FREE Delivery</label>
      </div>

      <div className="category-product-action">
        <button>View Product</button>
        <button>Add to Basket</button>
      </div>
    </article>
  );
};

export default Category_products;
