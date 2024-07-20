import React, { useState } from 'react';
import FormType from '../../components/FormType';


export const FormTypeContext = React.createContext();

const CreatePage = () => {
  const [components, setComponents] = useState([]);

  const addComponent = (Component) => {
    setComponents([...components, { Component, id: components.length + 1 }]);
  };

  return (
    <FormTypeContext.Provider value={{ addComponent }}>
      <div className="survey-question-page">
        <FormType />
        <div className="selected-components">
          {components.map(({ Component, id }) => (
            <Component key={id} index={id} />
          ))}
        </div>
      </div>
    </FormTypeContext.Provider>
  );
};

export default CreatePage;
