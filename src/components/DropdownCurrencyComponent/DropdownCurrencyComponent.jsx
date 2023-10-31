import DropdownButton from "react-bootstrap/DropdownButton";
import FormCheckComponent from "../FormCheckComponent/FormCheckComponent";
import './DropdownCurrencyComponent.css'

const DropdownCurrency = () => {
  return (
    <>
      <DropdownButton
        key="Warning"
        id={`dropdown-variants-Warning`}
        variant="warning"
        title="Currency"
        className="dropdown-currency"
        >
          <FormCheckComponent type="radio" currency="USD" name="currency" defaultChecked={true} />
          <FormCheckComponent type="radio" currency="ARS" name="currency"/>
      </DropdownButton>
    </>
  );
};

export default DropdownCurrency;
