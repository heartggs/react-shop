import styles from "./ProductDetail.module.css";
import axios from "axios";
import cx from "clsx";
import { Params, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartState } from "../globaldata/CartState";
import BreadCrumble from "./BreadCrumble";
import { FaStarHalf } from "react-icons/fa";
import { useRecoilState } from "recoil";

interface Product {
  id: number;
  title: string;
  image: string;
  src: any;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  [key: string]: any;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState<Product | undefined>();
  const [cart, setCart] = useRecoilState(CartState);

  const handleAddToCart = () => {
    if (detailProduct) {
      setCart((prevCart) => [...prevCart, detailProduct]);
    }
    console.log(detailProduct);
    console.log(cart.length);
  };

  const getDetail = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setDetailProduct(data);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div className={styles.cardwrapper}>
      <BreadCrumble prePage={"홈"} nextPage={"패션"} />
      <div className={styles.detailWrapper}>
        <figure>
          <img className={styles.square} src={detailProduct?.image}></img>
        </figure>
        <div className={styles.textArea}>
          <div className={styles.titleArea}>
            <h3>{detailProduct?.title}</h3>
            <div className={styles.badge}>new</div>
          </div>
          <p className={styles.des}>{detailProduct?.description}</p>
          <div className={styles.ratingArea}>
            <div className={styles.stars}>
              {detailProduct && (
                <div className={styles.rating}>
                  {Array.from({ length: 10 }, (_, index) => (
                    <FaStarHalf
                      key={index}
                      className={cx(
                        styles.origin,
                        Math.floor(detailProduct.rating.rate) > index / 2
                          ? styles.highlight
                          : Math.ceil(detailProduct.rating.rate) === index / 2
                          ? styles.half
                          : null
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className={styles.numberArea}>
              <span>{detailProduct?.rating.rate}</span>
              <span>/</span>
              <span>{detailProduct?.rating.count}</span>
            </div>
          </div>
          <p className={styles.price}>${detailProduct?.price}</p>
          <div className={styles.buttonArea}>
            <button
              className={cx(styles.button, styles.addCart)}
              onClick={handleAddToCart}
            >
              장바구니에 담기
            </button>
            <Link to="/cart" className={cx(styles.button, styles.toCart)}>
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
