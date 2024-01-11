import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ArrowDropDown } from '@mui/icons-material'
import { TextField } from '@mui/material'

function DateInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        className="date-input"
        slots={{
          openPickerIcon: ArrowDropDown,
          textField: (params) => <TextField {...params} fullWidth />,
        }}
      />
    </LocalizationProvider>
  )
}

export default DateInput
