import React from "react";
import dateFnsFormat from "date-fns/format";
import { parseISO } from "date-fns";

const DateTime = ({ date }) => {
  const dateTime = dateFnsFormat(parseISO(date), "EEEE,MMMM do, yyyy hh:mm a");
  return <div>{dateTime}</div>;
};

export default DateTime;
