import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <ProdukInfo isDiscount="yes"  name="BREGO" category="Lebaran" />
      <FotoProduk />
      <ReviewItems />
    </div>
  );
}



function FotoProduk() {
  return (
      <div className="Foto">
        <img src="Sneaker_Dior.jpg" />
      </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount} = props;
  if(isDiscount == "yes") {
    return (
  <p>Diskon {discount}% off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
  <p>Akan ada diskon..</p>
    );
  }
  else {
    return (
  <p>Belum ada diskon</p>
      );
  }
}


function ProdukInfo(props) {
  const {category, name, isDiscount }= props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih bagus", "Garansi 1 tahun"];
  const numbers = props.numbers;
  const listbenefits = benefits.map((ItemBenefit) =>
    <li key={ItemBenefit}>{ItemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate" >{category}</p>
        <h1 className="Title">{name}</h1>
        <p  className="Price">IDR 500.000</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="info">
          Sneaker Dior merupakan sepatu yang paling dicari di AJ Collection, 
          sneaker dior nyaman digunakan, tampil lebih memukau seperti pendahulunya dari tahun 1988
          Detail material. Merek dagang dapat berubah sewaktu-waktu
        </p>
        <ul>
          {listbenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Tambahkan ke keranjang</a>
      </div>
    </div>
  );
}

function TambahCart(e)  {
  return console.log("Membeli produk  " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
