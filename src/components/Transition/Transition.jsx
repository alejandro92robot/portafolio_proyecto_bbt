import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // Asegúrate de tener las clases CSS necesarias
import PropTypes from 'prop-types';

const Transition = ({ ComponentToAnimate, componentProps }) => {
    const [showMessage, setShowMessage] = useState(false);

    // Cambia el estado después de que el componente haya sido montado
    useEffect(() => {
        setShowMessage(true);
        // Cleanup function to handle unmount
        return () => {
            setShowMessage(false);
        };
    }, []);

    return (
        <div>
            <CSSTransition
                in={showMessage}
                timeout={2000}
                classNames="message"
                unmountOnExit
            >
                <div className="message">
                    {/* Renderiza el componente con sus props */}
                    {React.createElement(ComponentToAnimate, componentProps)}
                </div>
            </CSSTransition>
        </div>
    );
};

Transition.propTypes = {
    ComponentToAnimate: PropTypes.elementType.isRequired,
    componentProps: PropTypes.object, // Acepta un objeto de props para el componente
};

export default Transition;
