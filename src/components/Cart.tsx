import BreadCrumble from "./BreadCrumble";
import styles from "./Cart.module.css";
import cx from "clsx";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { CartState } from "../globaldata/CartState";
import React from "react";

interface Product {
  quantity: number;
  src: any;
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useRecoilState(CartState);
  const [items, setItems] = React.useState<
    {
      id: number;
      title: string;
      src: string;
      price: number;
      quantity: number;
    }[]
  >([]);

  const ifCartEmpty = () => {
    return !cart || cart.length === 0;
  };

  React.useEffect(() => {
    if (cart.length > 0) {
      const updatedItems = cart.map((item) => ({
        id: item.id,
        src: item.image,
        title: item.title,
        price: item.price,
        quantity: 1,
      }));

      setItems(updatedItems);
    }
  }, [cart]);

  const onQuantityChange = (itemId: number, newQuantity: any) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleYesButtonClick() {
    setCart([]);
    setIsModalOpen(false);
  }

  function handleNoButtonClick() {
    setIsModalOpen(false);
  }

  // const onAddToCart = (
  //   id: number,
  //   title: string,
  //   src: string,
  //   price: number,
  //   quantity: number
  // ) => {
  //   const existingItem = cart.find((item) => item.id === id);
  //   if (existingItem) {
  //     const updatedCart = cart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + quantity } : item
  //     );
  //     setCart(updatedCart);
  //   } else {
  //     const newCart = [...cart, { id, title, src, price, quantity }];
  //     setCart(newCart);
  //   }
  // };

  return (
    <div className={styles.cartWrapper}>
      <BreadCrumble prePage={"홈"} nextPage={"장바구니"} />
      {ifCartEmpty() ? (
        <div className={styles.emptyArea}>
          <div className={styles.topSection}>
            <h2>장바구니에 물품이 없습니다.</h2>
            <a href="/">담으러가기</a>
          </div>
        </div>
      ) : (
        <div className={styles.emptyArea}>
          <div className={styles.bottomArea}>
            <div className="itemListWrapper">
              {items.map((item) => (
                <div key={item.id} className={styles.buyingItem}>
                  <a href="/">
                    <figure>
                      <img className={styles.square} src={item.src}></img>
                    </figure>
                  </a>
                  <div className={styles.cardInfo}>
                    <h3>
                      <a href="/">{item.title}</a>
                    </h3>
                    <p className={styles.priceArea}>${item.price}</p>
                    <div className={styles.buttonArea}>
                      <button
                        className={cx(styles.button, styles.leftBtn)}
                        onClick={() =>
                          onQuantityChange(
                            item.id,
                            Math.max(item.quantity - 1, 1)
                          )
                        }
                      >
                        -
                      </button>
                      <button
                        className={cx(styles.button, styles.middleNumber)}
                      >
                        {item.quantity}
                      </button>
                      <button
                        className={cx(styles.button, styles.rightBtn)}
                        onClick={() =>
                          onQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.buying}>
              <span>총:</span>
              <span>$</span>
              <span>{getTotalPrice()}</span>
              <button className={styles.buyingButton} onClick={handleOpenModal}>
                구매하기
              </button>
              {isModalOpen && (
                <div className={styles.modalWrapper}>
                  <div className={styles.modal}>
                    <div className={styles.modalBox}>
                      <h3>정말로 구매하시겠습니까?</h3>
                      <p>장바구니의 모든 상품들이 삭제됩니다.</p>
                      <div className={styles.buttonArea}>
                        <button
                          className={styles.btnYes}
                          onClick={handleYesButtonClick}
                        >
                          예
                        </button>
                        <button
                          className={styles.btnNo}
                          onClick={handleNoButtonClick}
                        >
                          아니오
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
