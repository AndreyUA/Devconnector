import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
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
          <button onClick={() => deleteEducation(item._id)} className="btn btn-danger">
            Delete
          </button>
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
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
