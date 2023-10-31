import Form from "react-bootstrap/Form";


const FormCheckComponent = ({currency, type, name, defaultChecked=false}) => {
  return (
    <div className='d-flex ps-3'>
        <Form.Check
            type={`${type}`}
            label={`${currency}`}
            id={`${type}-${currency}`}
            name={`${name}`}
            defaultChecked={defaultChecked}
          />
    </div>

  )
}

export default FormCheckComponent;
