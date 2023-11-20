import axios from "axios";
import { useEffect, useState } from "react";
import FilterCars from "../Components/FilterCars";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/Navbar";
import CarsShow from "../Components/CarsShow";

const SearchCarsPage = () => {
  const [carData, setCarData] = useState([]);
  console.log(carData);
  useEffect(() => {
    handleListCar();
  }, []);

  const handleListCar = () => {
    axios
      .get("https://api-car-rental.binaracademy.org/customer/v2/car")
      .then((ress) => {
        setCarData(ress.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  const handleFilter = (e) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}&isRented=${fStatus}`
      )
      .then((res) => {
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  const [fName, setFName] = useState("");
  const handleChangeName = (e) => {
    setFName(e.target.value);
  };

  const [fCategory, setFCategory] = useState("");
  console.log(fCategory);
  const handleChangeCategory = (e) => {
    setFCategory(e.target.value);
  };

  const [fMinPrice, setFMinPrice] = useState("");
  const [fMaxPrice, setFMaxPrice] = useState("");
  console.log(fMinPrice, fMaxPrice);
  const handlePrice = (e) => {
    if (e.target.value === "Small") {
      setFMinPrice("0");
      setFMaxPrice("400000");
    } else if (e.target.value === "Large") {
      setFMinPrice("400000");
      setFMaxPrice("");
    } else {
      setFMinPrice("");
      setFMaxPrice("");
    }
  };

  const [fStatus, setFStatus] = useState("");
  const handleStatus = (e) => {
    setFStatus(e.target.value);
  };

  console.log(fStatus);

  return (
    <div>
      <NavBar />
      <Hero isBtnShow={false} isContentShow={true} />
      <FilterCars
        handleSearchButton={handleFilter}
        nameFilter={handleChangeName}
        categoryFilter={handleChangeCategory}
        fCategory={fCategory}
        fName={fName}
        fMinPrice={fMinPrice}
        fMaxPrice={fMaxPrice}
        fStatus={fStatus}
        handlePrice={handlePrice}
        statusFilter={handleStatus}
        isInputDisable={false}
        isHeroShow={true}
        isBtnShow={true}
      />
      <CarsShow allCars={carData} />
      <Footer />
    </div>
  );
};

export default SearchCarsPage;
