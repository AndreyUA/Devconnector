import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.company}</td>
        <td className="hide-sm">{item.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{item.from}</Moment> -{" "}
          {item.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{item.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => deleteExperience(item._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
