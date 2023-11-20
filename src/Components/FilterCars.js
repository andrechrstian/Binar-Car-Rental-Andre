import { Form } from "react-bootstrap";
import "./FilterCars.css";

const FilterCars = (props) => {
  return (
    <div
      className={
        props.isHeroShow ? "filtercars-section" : "filtercars-section-false"
      }
    >
      <div
        className={props.isHeroShow ? "filtercars-bg" : "filtercars-bg-false"}
      >
        <div className="filtercars-search-bg">
          <div>
            <div className="filtercars-input-title">
              <p className="filtercars-input-title-p">Nama Mobil</p>
            </div>
            <div className="filtercars-input-bg">
              <input
                onChange={props.nameFilter}
                className={
                  props.isInputDisable
                    ? "filtercars-input-name-disable"
                    : "filtercars-input-name"
                }
                placeholder={
                  props.isInputDisable ? null : "Ketik nama/tipe mobil"
                }
              />
            </div>
          </div>
          <div>
            <div className="filtercars-input-title">
              <p className="filtercars-input-title-p">Kategori</p>
            </div>
            <div>
              <Form.Select
                onChange={props.categoryFilter}
                className={
                  props.isInputDisable
                    ? "filtercars-select-disable"
                    : "filtercars-select"
                }
              >
                <option value={""}>-Masukan Kapasitas Mobil-</option>
                <option value={"small"}>2-4 orang</option>
                <option value={"medium"}>4-6 orang</option>
                <option value={"large"}>6-8 orang</option>
              </Form.Select>
            </div>
          </div>
          <div>
            <div className="filtercars-input-title">
              <p className="filtercars-input-title-p">Harga</p>
            </div>
            <div className="filtercars-input-harga">
              <div>
                <Form.Select
                  onChange={props.handlePrice}
                  className={
                    props.isInputDisable
                      ? "filtercars-select-disable"
                      : "filtercars-select"
                  }
                >
                  <option value={""}>-Masukan Harga Sewa per Hari-</option>
                  <option value={"Small"}>&lt; Rp. 400.000</option>
                  <option value={"Large"}>&gt; Rp. 400.000</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div>
            <div className="filtercars-input-title">
              <p className="filtercars-input-title-p">Status</p>
            </div>
            <div>
              <Form.Select
                onChange={props.statusFilter}
                className={
                  props.isInputDisable
                    ? "filtercars-select-disable"
                    : "filtercars-select"
                }
              >
                <option value={""}>Status</option>
                <option value={false}>Tersedia</option>
                <option value={true}>Disewa</option>
              </Form.Select>
            </div>
          </div>
          <div className="filtercars-seacrh-button-bg">
            <div>
              <button
                onClick={props.handleSearchButton}
                className={
                  props.isHeroShow
                    ? "filtercars-seacrh-button"
                    : "filtercars-seacrh-button-false"
                }
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCars;
