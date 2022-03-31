import PropTypes from "prop-types";
import react from "react";

export default function Preview({ value }) {
    return <div>{ value }</div>;
}

Preview.propTypes = {
    value: PropTypes.node,
};