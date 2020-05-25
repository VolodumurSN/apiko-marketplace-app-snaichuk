import React, { Fragment } from 'react';
import { checkPhoto } from '../../utils/checkPhoto';
import { useModalWithData } from '../../utils/useModal';
import s from './Product.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modals/Modal';
import MessageModal from '../../components/Modals/MessageModal';
import MessageForm from '../../components/Forms/MessageForm';
import Spinner from '../../components/Spinners/Spinner';
import * as dayjs from 'dayjs';
import * as calendar from 'dayjs/plugin/calendar';
import OptimisticHOC from '../../components/HOCs/OptimisticHOC';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark';

const OptimisticBookmarkBtn = OptimisticHOC(ButtonBookmark);

const Product = ({
  productDetails,
  isProductLoading,
  saveProduct,
  unSaveProduct,
}) => {
  const {
    isModalOpen,
    setModalState,
    setModalData,
    modalData,
  } = useModalWithData();

  const { id, createdAt, title, owner, saved } = productDetails;

  dayjs.extend(calendar);
  const date = dayjs(dayjs(new Date(createdAt))).calendar(dayjs());

  if (isProductLoading || !owner) {
    return <Spinner />;
  }

  return (
    <div className={s.container}>
      <ProductContainer {...{ ...productDetails, date }} />

      <SellerContainer
        {...{
          owner,
          id,
          title,
          saved,
          saveProduct,
          unSaveProduct,
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
  date,
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
          <span className={s.date}>{date}</span>
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
  id,
  title,
  saved,
  saveProduct,
  unSaveProduct,
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

        <OptimisticBookmarkBtn
          withText
          id={id}
          isActive={saved}
          activate={saveProduct}
          deactivate={unSaveProduct}
        />
      </div>
    </Fragment>
  );
};

export default Product;
