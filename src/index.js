import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs'

// h3 
const H3 = (props) => {
  return <h3>{props.text}</h3>
}

// button
const Button = (props) => {
  const { type, text, onClick } = props
  let btnClassName = 'btn-primary'
  if (type) {
    btnClassName = `btn-${type}`
  }
  return <button onClick={onClick} className={btnClassName}>{text}</button>
}

Button.defaultProps = {
  type: 'primary'
}

// input
const Input = (props) => {
  const { onChange, type, value } = props
  return <input onChange={onChange} type={type} value={value} required />
}

// toggle switch
const Switch = () => {
  return <label className="theme-switch">
    <input type="checkbox" />
    <div className="slider round"></div>
  </label>
}

// option tag
const Option = (props) => {
  const { value, text } = props
  return <option value={value}>{text}</option>
}

// select
const Select = (props) => {
  const { options } = props
  // Loop through array of options and return an 'Option' component for each one
  const renderOptions = () => {
    return options.map(element => <Option value={element.value} text={element.text} key={element.value} />)
  }
  return <select>
    <Option text="Please choose an option" />
    {renderOptions()}
  </select>
}

// card
const Card = (props) => {
  const { title, imageUrl, description } = props
  return <div className="card-container">
    <img className="card-image" src={imageUrl} alt={title} />
    <div className="card-body">
      <H3 text={title} />
      <p className="card-description">{description}</p>
    </div>
  </div>
}


ReactDOM.render(
  <React.StrictMode>
    <div className="container-div">
      <H3 text="Buttons" />
      <Button text="Primary" onClick={() => console.log("hhhhh")} />
      <Button text="Secondary" onClick={() => console.log("%c💥", "font-size:100px")} type="secondary" />

      <H3 text="Switch" />
      <Switch />

      <H3 text="Input" />
      <Input type="text" />

      <H3 text="Select (Choose a pet)" />
      <Select options={[{ value: "dog", text: "Dog" }, { value: "cat", text: "Cat" }, { value: "hamster", text: "Hamster" }, { value: "parrot", text: "Parrot" }, { value: "spider", text: "Spider" }, { value: "goldfish", text: "Goldfish" }]} />

      <H3 text="Tabs" />
      <Tabs items={[{ text: "Seoul is the capital of South Korea.", value: "Seoul" }, { text: "London is the capital of England.", value: "London" }, { text: "Paris is the capital of France.", value: "Paris" }]} selectedItem="Seoul" />

      <H3 text="Card" />
      <Card title="NGC 2467: From Gas to Stars" imageUrl="https://apod.nasa.gov/apod/image/0501/ngc2467_gemini.jpg" description="One might guess that the group of stars on the left is responsible for shaping the gas cloud on the right -- but it probably is not. Observations of many of the stars in the NGC 2467 show them to be more a superposition of loose groups of stars at different distances than a coherent open cluster of stars energizing the nebula. Still, the above image captures various stages of star formation. The stars at the far left have already formed and their birth nebulae have already dispersed. At the lower left lies a very young star that is breaking free of its surrounding birth cocoon of gas. On the right of the above image, a bright wall of bright gas glows as it evaporates from the energy of many newly formed bright stars. Toward the center, deep dark lanes of dust hide parts of the nebula that surely are forming new stars." />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Button (onClick, text, type=primary|secondary) -> DONE
 * Switch -> DONE
 * Input props(onChange, type[password/text], value) -> DONE
 * Select -> DONE
 * Card (title, description, imageUrl) -> DONE
 * Tabs (Items[{text, value}], selectedItem) -> DONE
 */

