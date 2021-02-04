import PropTypes from 'prop-types';
import Button from "../Button/Button";

const Header = ({title, onAdd, isShowingForm}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={isShowingForm ? 'Close' : 'Add'}
        color={isShowingForm? '#cc1818' : 'green'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;