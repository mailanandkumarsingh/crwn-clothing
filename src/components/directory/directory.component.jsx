import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {
        /* {this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
              linkUrl={linkUrl}
            />
          );
        })} */
        // Other way of doing this using 2 levels of destructuring
        // this is done when the values u desctructure and the keys that you pass
        // have the same name, as u can c in the eg above line 59, 60, 61, 62
        // this way the same key names will be available
        // as props in the component passed - MenuItem in this case
        sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))
      }
    </div>
  );
};
const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(Directory);
