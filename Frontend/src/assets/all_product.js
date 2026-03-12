import p_13 from "../assets/Product/p13.jpg";
import p_14 from "../assets/Product/p14.jpg";
import p_15 from "../assets/Product/p15.png";
import p_16 from "../assets/Product/p16.png";
import p_17 from "../assets/Product/p17.png";
import p_18 from "../assets/Product/p18.png";
import p_19 from "../assets/Product/p19.png";
import p_20 from "../assets/Product/p20.png";
import p_21 from "../assets/Product/p21.png";
import p_22 from "../assets/Product/p22.png";
import p_23 from "../assets/Product/p23.png";
import p_24 from "../assets/Product/p24.png";
import p_25 from "../assets/Product/p25.png";
import p_26 from "../assets/Product/p26.png";
import p_27 from "../assets/Product/p27.png";
import p_28 from "../assets/Product/p28.png";
import p_29 from "../assets/Product/p29.png";
import p_30 from "../assets/Product/p30.png";
import p_31 from "../assets/Product/p31.png";
import p_32 from "../assets/Product/p32.png";
import p_33 from "../assets/Product/p33.png";
import p_34 from "../assets/Product/p34.png";
import p_35 from "../assets/Product/p35.png";
import p_36 from "../assets/Product/p36.png";
import p_37 from "../assets/Product/p37.png";
import p_38 from "../assets/Product/p38.png";
import p_39 from "../assets/Product/p39.png";
import p_40 from "../assets/Product/p40.png";
import p_41 from "../assets/Product/p41.png";
import p_42 from "../assets/Product/p42.png";
import p_43 from "../assets/Product/p43.png";
import p_44 from "../assets/Product/p44.png";
import p_45 from "../assets/Product/p45.png";
import p_46 from "../assets/Product/p46.png";
import p_47 from "../assets/Product/p47.png";
import p_48 from "../assets/Product/p48.png";
import p_49 from "../assets/Product/p49.png";
import p_50 from "../assets/Product/p50.png";
import p_51 from "../assets/Product/p51.png";
import p_52 from "../assets/Product/p52.png";

const all_product = [
{ id: 13, name: "Casual Hoodie", category: "men", image: p_13, new_price: 799.00, old_price: 999.00 },
{ id: 14, name: "Floral Summer Dress", category: "women", image: p_14, new_price: 899.00, old_price: 1199.00 },
{ id: 15, name: "Kids Party Wear Set", category: "kids", image: p_15, new_price: 699.00, old_price: 899.00 },
{ id: 16, name: "Slim Fit Shirt", category: "men", image: p_16, new_price: 649.00, old_price: 899.00 },
{ id: 17, name: "Elegant Kurti", category: "women", image: p_17, new_price: 749.00, old_price: 999.00 },
{ id: 18, name: "Formal Blazer", category: "men", image: p_18, new_price: 1599.00, old_price: 1999.00 },
{ id: 19, name: "Running Shoes", category: "men", image: p_19, new_price: 1299.00, old_price: 1599.00 },
{ id: 20, name: "Girls Fairy Dress", category: "kids", image: p_20, new_price: 799.00, old_price: 999.00 },
{ id: 21, name: "Winter Sweatshirt", category: "men", image: p_21, new_price: 699.00, old_price: 899.00 },
{ id: 22, name: "Stylish Crop Top", category: "women", image: p_22, new_price: 499.00, old_price: 699.00 },
{ id: 23, name: "Kids Denim Jacket", category: "kids", image: p_23, new_price: 899.00, old_price: 1099.00 },
{ id: 24, name: "Cotton Casual Shirt", category: "men", image: p_24, new_price: 599.00, old_price: 799.00 },
{ id: 25, name: "Palazzo Set", category: "women", image: p_25, new_price: 999.00, old_price: 1299.00 },
{ id: 26, name: "Classic Wrist Watch", category: "men", image: p_26, new_price: 1499.00, old_price: 1899.00 },
{ id: 27, name: "Regular Fit Jeans", category: "men", image: p_27, new_price: 799.00, old_price: 999.00 },
{ id: 28, name: "Kids Printed Dress", category: "kids", image: p_28, new_price: 599.00, old_price: 799.00 },
{ id: 29, name: "Sports Hoodie", category: "men", image: p_29, new_price: 899.00, old_price: 1199.00 },
{ id: 30, name: "Elegant Party Gown", category: "women", image: p_30, new_price: 1499.00, old_price: 1799.00 },
{ id: 31, name: "Baby Winter Suit", category: "kids", image: p_31, new_price: 799.00, old_price: 999.00 },
{ id: 32, name: "Checked Shirt", category: "men", image: p_32, new_price: 649.00, old_price: 899.00 },
{ id: 33, name: "Women Co-ord Set", category: "women", image: p_33, new_price: 1099.00, old_price: 1399.00 },
{ id: 34, name: "Men Formal Shoes", category: "men", image: p_34, new_price: 1799.00, old_price: 2199.00 },
{ id: 35, name: "Classic Blue Jeans", category: "men", image: p_35, new_price: 899.00, old_price: 1199.00 },
{ id: 36, name: "Kids Party Dress", category: "kids", image: p_36, new_price: 699.00, old_price: 899.00 },
{ id: 37, name: "Men Sleeve T-shirt", category: "men", image: p_37, new_price: 799.00, old_price: 999.00 },
{ id: 38, name: "Women Summer Top", category: "women", image: p_38, new_price: 549.00, old_price: 749.00 },
{ id: 39, name: "Kids Cartoon T-Shirt", category: "kids", image: p_39, new_price: 399.00, old_price: 599.00 },
{ id: 40, name: "Stylish Sunglasses", category: "men", image: p_40, new_price: 699.00, old_price: 999.00 },
{ id: 41, name: "Saree", category: "women", image: p_41, new_price: 899.00, old_price: 1199.00 },
{ id: 42, name: "Sherwani Party Wear", category: "men", image: p_42, new_price: 1399.00, old_price: 1699.00 },
{ id: 43, name: "Men Jacket", category: "men", image: p_43, new_price: 999.00, old_price: 1299.00 },
{ id: 44, name: "Kids Wear", category: "kids", image: p_44, new_price: 749.00, old_price: 949.00 },
{ id: 45, name: "Men Trackshut", category: "men", image: p_45, new_price: 899.00, old_price: 1099.00 },
{ id: 46, name: "Women Stylish Dress", category: "women", image: p_46, new_price: 1299.00, old_price: 1599.00 },
{ id: 47, name: "Kids Winter Jacket", category: "kids", image: p_47, new_price: 999.00, old_price: 1299.00 },
{ id: 48, name: "Men Crocs", category: "men", image: p_48, new_price: 799.00, old_price: 999.00 },
{ id: 49, name: "Women Sendals", category: "women", image: p_49, new_price: 699.00, old_price: 899.00 },
{ id: 50, name: "Luxury Watch", category: "men", image: p_50, new_price: 1999.00, old_price: 2499.00 },
{ id: 51, name: "Men Round Neck T-Shirt", category: "men", image: p_51, new_price: 1199.00, old_price: 1499.00 },
{ id: 52, name: "Kids Cute Dress", category: "kids", image: p_52, new_price: 649.00, old_price: 849.00 }
];

export default all_product;