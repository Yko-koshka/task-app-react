import TimeListItem from "../time-list-item/time-list-item";

import "./time-list.scss";

const TimeList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TimeListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
    );
  });

  return <ul className="time-list list-group">{elements}</ul>;
};

export default TimeList;
