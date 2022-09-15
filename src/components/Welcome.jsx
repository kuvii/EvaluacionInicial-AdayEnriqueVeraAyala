import PropTypes from 'prop-types';

const Welcome = ({name, surname}) => {
    return (                        
    <>                                  
      <h1>Hello World</h1>             
      <p>Hola {name} {surname}</p>
    </>
    );
  };

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string
}  

export default Welcome;