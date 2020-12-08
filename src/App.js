import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { DropdownSubmenu} from 'react-bootstrap-submenu';


function App() {
  return (
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Opción 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Opción 2</Dropdown.Item>
    <DropdownSubmenu title='Opción 3'>
      <Dropdown.Item href="#/action-2">Opción A</Dropdown.Item>
    </DropdownSubmenu>
    <Dropdown.Item href="#/action-3">Opción  4</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  );
}

export default App;