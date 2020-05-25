import React, { Fragment } from 'react';
import { DateTime } from 'luxon';
import { checkPhoto } from '../../utils/checkPhoto';
import { useModalWithData } from '../../utils/useModal';
import s from './Product.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar';
import IconBookmark from '../../components/Icons/IconBookmark';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modals/Modal';
import MessageModal from '../../components/Modals/MessageModal';
import MessageForm from '../../components/Forms/MessageForm';
import Spinner from '../../components/Spinners/Spinner';

const Product = ({
  productDetails,
  isProductLoading,
  isBookmark,
  handleBookmark,
}) => {
  const {
    isModalOpen,
    setModalState,
    setModalData,
    modalData,
  } = useModalWithData();

  const { id, createdAt, title, owner } = productDetails;

  const date = DateTime.fromISO(createdAt);
  const days = date.toRelativeCalendar();
  const hours = date.toLocaleString(DateTime.TIME_SIMPLE);

  if (isProductLoading || !owner) {
    return <Spinner />;
  }

  return (
    <div className={s.container}>
      <ProductContainer {...{ ...productDetails, days, hours }} />

      <SellerContainer
        {...{
          owner,
          title,
          isBookmark,
          handleBookmark,
          setModalState,
          setModalData,
        }}
      />

      <Modal
        isActive={isModalOpen}
        handleClose={() => setModalState(false)}
      >
        <MessageModal data={modalData}>
          <MessageForm productId={id} owner={owner} />
        </MessageModal>
      </Modal>
    </div>
  );
};

const ProductContainer = ({
  title,
  description,
  photos,
  location,
  price,
  days,
  hours,
}) => {
  return (
    <Fragment>
      <div className={s.productContainer}>
        <div className={s.imgWrap}>
          <img
            src={checkPhoto(photos)}
            className={s.img}
            alt="product"
          />
          <div className={s.price}>${price}</div>
        </div>

        <div className={s.titleWrap}>
          <h3 className={s.title}>{title}</h3>
          <span className={s.date}>{`${days} ${hours}`}</span>
        </div>

        <div className={s.location}>
          <img
            src="/images/icons/location.svg"
            alt="location"
            className={s.icon}
          />
          <p className={s.locationText}>{location}</p>
        </div>

        <p className={s.descr}>{description}</p>
      </div>
    </Fragment>
  );
};

const SellerContainer = ({
  owner,
  title,
  isBookmark,
  handleBookmark,
  setModalState,
  setModalData,
}) => {
  const { avatar, fullName, location } = owner;

  return (
    <Fragment>
      <div className={s.sellerContainer}>
        <div className={s.seller}>
          <ProfileAvatar size="x3" user={owner} photo={avatar} />
          {fullName}
          <p className={s.sellerLocation}>{location}</p>
        </div>

        <Button
          color="#349A89"
          onClick={() => {
            setModalData({ title, owner });
            setModalState(true);
          }}
        >
          CHAT WITH SELLER
        </Button>

        <Button
          onClick={handleBookmark}
          color="#fff"
          border="1px solid #349A89"
          type="button"
        >
          {isBookmark ? (
            <>
              <IconBookmark fill="#349A89" painted />
              <span>SAVED</span>
            </>
          ) : (
            <>
              <IconBookmark fill="#349A89" />
              <span>ADD TO FAVORITE</span>
            </>
          )}
        </Button>
      </div>
    </Fragment>
  );
};

export default Product;
