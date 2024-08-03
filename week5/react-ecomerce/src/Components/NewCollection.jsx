import React from "react";
import newCollection from "./Assets/new_collections";
import Items from "./Items";
const NewCollection = () => {
  return (
    <>
      <div className="new-collection">
        <h1>New Collection</h1>
        <hr />
        <div className="collection">
          {newCollection.map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewCollection;
