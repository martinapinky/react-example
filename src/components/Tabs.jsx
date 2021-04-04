import React,  { useState } from 'react'

// tabs component
const Tabs = ({ selectedItem, items }) => {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     selectedItem: props.selectedItem
    //   }
    // }
  
    const [currentTab, setCurrentTab] = useState(selectedItem)
  
    const handleClick = (event, tab) => {
      event.preventDefault()
      setCurrentTab(tab)
    }
  
    const renderTabs = () => {
      return items.map(element => {
        if (currentTab === element.value) {
          console.log(element.value)
          return <button className="tablinks active" key={element.value} onClick={event => handleClick(event, element.value)}>{element.value}</button>
        } else {
          return <button className="tablinks" key={element.value} onClick={event => handleClick(event, element.value)}>{element.value}</button>
        }
      })
    }
  
    const renderTabPanes = () => {
      return items.map(element => {
        if (currentTab === element.value) {
          return <div id={element.value} className="tabcontent" key={element.value}>
            <h3>{element.value}</h3>
            <p>{element.text}</p>
          </div>
        } else {
          return null
        }
      })
    }
  
  
    return (<div>
      <div className="tab">
        {renderTabs()}
      </div>
      {renderTabPanes()}
    </div>)
  }

  export default Tabs;