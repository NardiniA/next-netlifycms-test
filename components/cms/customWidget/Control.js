import PropTypes from 'prop-types';
import react from "react";

export default class Control extends react.Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        forIF: PropTypes.string,
        value: PropTypes.node,
        classNameWrapper: PropTypes.string.isRequired,
    }

    static defaultProps = {
        value: '',
    }

    render() {
        const {
            forID,
            value,
            onChange,
            classNameWrapper
        } = this.props;

        return (
            <input 
                type="text"
                id={forID}
                className={classNameWrapper}
                value={value || ''}
                onChange={e => onChange(e.target.value)}
            />
        );
    }
}