const Tooltip = ({ description, direction, className }) => {
  const getDirection = () => {
    const appendedClass = className ? className : '';
    switch (direction) {
      case 'top':
      case 'right':
      case 'left':
        return `${direction} ${appendedClass}`;
      default:
        return `right ${appendedClass}`;
    }
  };
  return (
    <div className={`tooltip-wrapper ${getDirection()}`}>
      <img
        src="https://img.icons8.com/color/50/000000/info.png"
        className="icon"
      />
      <div className="description">{description}</div>
    </div>
  );
};

export default Tooltip;
