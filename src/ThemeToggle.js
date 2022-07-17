import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ThemeContext from './ThemeContext'

function ThemeToggle(props) {
  return (
    <ThemeContext.Consumer>
      {({ variant, toggleTheme }) => (
        <ToggleButtonGroup name="theme" value={variant} onChange={toggleTheme} >
          <ToggleButton id="light" value="light" variant="outline-secondary">
            <i className="bi bi-brightness-high"></i> Light
          </ToggleButton>
          <ToggleButton id="dark" value="dark" variant="outline-secondary">
            Dark <i className="bi bi-moon"></i>
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggle