import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { connect } from "react-redux";

const Education = ({ education }) => {
  const educations = education.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.school}</td>
        <td className="hide-sm">{item.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{item.from}</Moment> -{" "}
          {item.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{item.to}</Moment>
          )}
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default connect()(Education);
