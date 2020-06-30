import React from "react";

function SummaryComponent(props) {
  const { values } = props;
  const changeDateFormat = inputDate => {
    // expects Y-m-d
    var splitDate = inputDate.split("-");
    if (splitDate.count == 0) {
      return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    return month + "-" + day + "-" + year;
  };

  // var inputDate = '2015-01-25';
  // var newDate = changeDateFormat(inputDate);
  return <div>summary</div>;
}

export default SummaryComponent;
