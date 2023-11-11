// import stylees from './app.module.css';

// function App() {

//   let favoriteColor = ['red', 'blue', 'black', 'green', 'gray']
//   let Sauces = ['Ketchup', 'Mustard', 'Mayonnaise', 'BBQ Sauce', 'Ranch']
//   let bestStooge = ['Larry', 'Moe', 'Curly']

//   const inputType = (type, placehold) => {
//     return <div className={stylees.contForm}>
//       <label htmlFor="fform">{placehold}</label>
//       <input onChange={(e) => handleClickInformation(e)} type={type} id={stylees.fform} placeholder={placehold} />
//     </div>
//   }

//   const handleClickInformation = (e) => {
//     console.log(e.target.value);
//   }
//   return (
//     <div className={stylees.container}>
//       {inputType('text', 'First name')}
//       {inputType('text', 'last name')}
//       {inputType('text', 'Age')}


//       <div className={stylees.contForm}>
//         <label>Employed</label>
//         <input id={stylees.employedCheck} type="checkbox" />
//       </div>

//       <div className={stylees.contForm}>
//         <label htmlFor="carDropdown">Select a car:</label>
//         <select id={stylees.carDropdown} name="car">
//           {favoriteColor.map((items) => {
//             return <option value={items}>{items}</option>
//           })}
//         </select>
//       </div>



//       <div className={stylees.contFormSauces}>
//         <label>Sauces</label>
//         <div className={stylees.saucesCont}>
//           {Sauces.map((items) => {
//             return <>
//               <input type="checkbox" />
//               <label>{items}</label><br />
//             </>
//           })}
//         </div>
//       </div>



//       <div className={stylees.contFormSauces}>
//         <label>Best Stooge</label>
//         <div className={stylees.saucesCont}>
//           {bestStooge.map((items) => {
//             return <>
//               <input type="radio" name="stooge" />
//               <label>{items}</label><br />
//             </>
//           })}
//         </div>
//       </div>



//       <div className={stylees.contForm}>
//         <label htmlFor="Nform">Notes</label>
//         <textarea id={stylees.Nform} placeholder="Note" rows="3" cols="70">
//           At w3schools.com you will learn how.
//         </textarea>
//       </div>

//       <div className={stylees.button}>
//         <button type="submit">Submit</button>
//         <button id={stylees.btn2} type="reset">Reset</button>
//       </div>

//     </div>
//   );
// }

// export default App;












import React, { useState } from 'react';
import stylees from './app.module.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    employed: false,
    selectedCar: '',
    selectedSauces: [],
    selectedStooge: '',
    notes: '',
  });

  const favoriteColor = ['red', 'blue', 'black', 'green', 'gray'];
  const Sauces = ['Ketchup', 'Mustard', 'Mayonnaise', 'BBQ Sauce', 'Ranch'];
  const bestStooge = ['Larry', 'Moe', 'Curly'];

  const inputType = (type, placehold, id) => {
    return (
      <div className={stylees.contForm}>
        <label htmlFor={id}>{placehold}</label>
        <input
          onChange={(e) => handleChange(id, e.target.value)}
          type={type}
          id={stylees.fform}
          placeholder={placehold}
        />
      </div>
    );
  };

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleClickInformation = () => {
    console.log(formData);
  };

  return (
    <div className={stylees.container}>
      {inputType('text', 'First name', 'fform')}
      {inputType('text', 'last name', 'lfom')}
      {inputType('text', 'Age', 'aform')}

      <div className={stylees.contForm}>
        <label>Employed</label>
        <input
          id={stylees.employedCheck}
          type="checkbox"
          onChange={(e) => handleChange('employed', e.target.checked)}
        />
      </div>

      <div className={stylees.contForm}>
        <label htmlFor={stylees.carDropdown}>Select a car:</label>
        <select
          id={stylees.carDropdown}
          name="car"
          onChange={(e) => handleChange('selectedCar', e.target.value)}
        >
          {favoriteColor.map((items) => (
            <option key={items} value={items}>
              {items}
            </option>
          ))}
        </select>
      </div>

      <div className={stylees.contFormSauces}>
        <label>Sauces</label>
        <div className={stylees.saucesCont}>
          {Sauces.map((items) => (
            <div key={items}>
              <input
                type="checkbox"
                onChange={(e) => handleChange(items, e.target.checked)}
              />
              <label>{items}</label>
              <br />
            </div>
          ))}
        </div>
      </div>

      <div className={stylees.contFormSauces}>
        <label>Best Stooge</label>
        <div className={stylees.saucesCont}>
          {bestStooge.map((items) => (
            <div key={items}>
              <input
                type="radio"
                name="stooge"
                onChange={() => handleChange('selectedStooge', items)}
              />
              <label>{items}</label>
              <br />
            </div>
          ))}
        </div>
      </div>

      <div className={stylees.contForm}>
        <label htmlFor={stylees.Nform}>Notes</label>
        <textarea
          id={stylees.Nform}
          placeholder="Note"
          rows="3"
          cols="70"
          onChange={(e) => handleChange('notes', e.target.value)}
        >
          At w3schools.com you will learn how.
        </textarea>
      </div>

      <div className={stylees.button}>
        <button type="button" onClick={handleClickInformation}>
          Submit
        </button>
        <button id={stylees.btn2} type="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
