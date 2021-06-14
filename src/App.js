import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([{ docName: "", fileType: "", fileSize: "" }]);
  const [inputName, setInputName] = useState(["Birth Certificate", "Previous Class Marksheet", "Aadhaar Card", "Conduct Certificate", "Transfer Certificate","Select.."]);
  const [inputType, setInputType] = useState(["PDF", "JPG", "JPEG"]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);

  };
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    
  };
  const handleAddClick = () => {
    setInputList([...inputList, { docName: "", fileType: "", fileSize: "" }]);
    const val = document.getElementById("dr").value;
    const indexofDoc = inputName.indexOf(val);
    const newStateName = [...inputName];
    if (indexofDoc !== -1) {
      newStateName.splice(indexofDoc, 1);
      setInputName(newStateName);
    }
  };
  return (
    <div className="ui container">
      <h1>Required Documents</h1><hr/>
      {inputList.map((x, i) => {
        return (
          <div className="ui form" key={i}>
            <div className="three fields">
              <div className="field"><label>Document Name*</label>
                <select id="dr" onChange={e => handleInputChange(e, i)}>
                  {inputName.map((name, i) => {
                    return (
                      <option key={i} value={name}>{name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="field"><label>File Type*</label>
                <select id="ty" onChange={e => handleInputChange(e, i)}>
                  {inputType.map((type, i) => {
                    return (
                      <option key={i} value={type}>{type}</option>
                    )
                  })}
                </select>
              </div>
              <div className="field"><label>File Size*</label><input
                className="ml10"
                name="fileSize"
                placeholder="Enter File Size"
                value={x.fileSize}
                onChange={e => handleInputChange(e, i)} />
              </div>
            </div>
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;