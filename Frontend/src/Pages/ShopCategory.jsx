import React, { useContext, useState } from 'react'
import "../CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../assets/dropdown.png";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);
  const [visible, setVisible] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(props.banner);

  const categoryProducts = all_product.filter(
    item => props.category.toLowerCase() === item.category.toLowerCase()
  );

  const handlePriceFilter = (range) => {

    if(range === "all"){
      setFilteredProducts([]);
      return;
    }

    const filtered = categoryProducts.filter((item)=>{

      if(range === "100-500"){
        return item.new_price >=100 && item.new_price <=500;
      }

      if(range === "500-1000"){
        return item.new_price >500 && item.new_price <=1000;
      }

      if(range === "1000-1500"){
        return item.new_price >1000 && item.new_price <=1500;
      }

      if(range === "1500-2000"){
        return item.new_price >1500 && item.new_price <=2000;
      }

      if(range === "2000"){
        return item.new_price >2000;
      }

    });

    setFilteredProducts(filtered);
  };

  return (
    <div className='shop-category'> 

      {/* <img className='shopCategory-banner' src={props.banner} alt="" /> */}
      <video 
        key={props.banner}
        src={props.banner}

        className="shopCategory-banner"
        autoPlay 
        loop 
        muted 
        playsInline
      >
  <source src={props.banner} type="video/mp4" />
</video>

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(visible, categoryProducts.length)}</span> out of {categoryProducts.length} products
        </p>

        <div className="shopCategory-sort">
          <span>Sort by</span>
          
          <div className="dropdown">
            <select onChange={(e)=>handlePriceFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="100-500">100 - 500</option>
              <option value="500-1000">500 - 1000</option>
              <option value="1000-1500">1000 - 1500</option>
              <option value="1500-2000">1500 - 2000</option>
              <option value="2000">2000+</option>
            </select>

            <img src={dropdown} alt="" />
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="shopCategory-product">
        {(filteredProducts.length > 0 ? filteredProducts : categoryProducts)
          .slice(0, visible)
          .map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {visible < categoryProducts.length && (
        <div
          className="shopCategory-load"
          onClick={() => setVisible(visible + 8)}
        >
          Explore More
        </div>
      )}

    </div>
  )
}

export default ShopCategory;