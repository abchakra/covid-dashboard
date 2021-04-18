import React from 'react';
import moment from 'moment';
const CustomTooltip = (props: any) => {
  let { active, payload, label } = props;
  const dateTip = moment(label).format('llll').slice(0, 12);
  const formattedDate = dateTip;
  if (payload === null) <div></div>;
  if (active)
    return (
      <div className='custom-tooltip'>
        <p className='label-tooltip'>{`${formattedDate}`}</p>
        <p className='desc-tooltip'>
          <span className='value-tooltip'>
            Total Cases: {payload[0].value.toLocaleString()}
          </span>
        </p>
      </div>
    );
  return <div></div>;
};

export default CustomTooltip;
