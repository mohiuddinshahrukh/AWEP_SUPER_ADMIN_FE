import React, { useState } from "react";
import { Calendar } from "tabler-icons-react";

const CalendatDemoDash = () => {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} />;
};

export default CalendatDemoDash;
