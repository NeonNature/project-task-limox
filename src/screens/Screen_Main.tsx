import ScreenContainer from '../components/ScreenContainer'
import mainImage from '../assets/image-002.png'
import DateInput from '../components/DateInput'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import icon from '../assets/button-icon.png'

function Screen_Main() {
  return (
    <ScreenContainer image={mainImage} classHelper="screen-main-image">
      <div id="screen-main-content">
        <div id="screen-main-title">
          WE MOVE <br />
          PROFESSIONALLY
        </div>
        <div id="screen-main-interact">
          <div>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Destination"
              variant="outlined"
            />
          </div>
          <div>
            <DateInput />
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="dropdown-input-label">
                Select Vehicle type
              </InputLabel>
              <Select
                labelId="dropdown-input-label"
                label="Select Vehicle type"
              >
                <MenuItem value={1}>Sedan</MenuItem>
                <MenuItem value={2}>Convertible</MenuItem>
                <MenuItem value={3}>Electric</MenuItem>
                <MenuItem value={4}>Hatchback</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <button className="screen-main-button">
              <img src={icon} alt="Car Icon" />
            </button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Screen_Main
