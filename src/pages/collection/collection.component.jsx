import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// OwnProps is the second parameter that is passed to mapStateToProps
// that gives us the props already passed to the component
const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId),
  });
export default connect(mapStateToProps)(CollectionPage);
