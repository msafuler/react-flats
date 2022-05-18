import React from 'react';

export default function Flats({ flats, selectedFlat, changeFocus }) {

  return (
    <div className="flats-container">
      {flats.map((flat) => {
        return (
          <div key={flat.name} onClick={changeFocus.bind(flat)} className={`flats-row ${selectedFlat === flat ? "selectedFlat" : ""}`}>
            <strong>
              <p className="flat-text-name">{flat.name}</p>
            </strong>
            <p className="flat-text-price">{flat.price} {flat.priceCurrency}</p>
            <img
              className="flat-image"
              src={flat.imageUrl}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
