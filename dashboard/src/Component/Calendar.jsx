import { useState, useContext } from "react";
import { DarkLightContext } from "../App";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { darkMode } = useContext(DarkLightContext);
  return (
    <div className="flex">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker"]}
          sx={{ width: "10rem", overflow: "hidden" }}
        >
          <DatePicker
            className=" "
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => (
              <input
                {...params}
                value={selectedDate.format("MM/DD/YYYY")}
                readOnly
                style={{ borderRadius: "8px" }}
                
              />
            )}
            sx={{
              "& .MuiInputBase-root": {
                height: "2.25rem",
                width: "10rem",
                borderRadius: "8px",
                backgroundColor: darkMode ? "#0B0E14" : "#ffffff",
                color: darkMode ? "#ffffff" : "",
                borderColor: darkMode ? "#404040 " : "",
                borderWidth: "1px",
                "&:hover": {
        borderColor: darkMode ? "#a3a3a3" : "", // Change to desired hover color
      },
              },
              "& .MuiInputBase-input": {
                padding: "0 10px",
              },
              "& .MuiSvgIcon-root": {
                color: darkMode ? "#ffffff" : "#000000",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;
