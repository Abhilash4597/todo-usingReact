import React, { useState } from 'react'

function TodoList() {

  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const handleEvent = (e) => {
    setActivity(e.target.value);
  }

  const addActivity = () => {
    // setListData([...listData, activity])
    // console.log(listData)
    setListData((listData) => {
      const updatedList = [...listData, activity];
      // console.log(updatedList)
      setActivity('');
      return updatedList;
    })
  }

  const removeActivity = (i) => {
    // const updatedListData = listData.filter(())
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={handleEvent}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List</p>
        {listData !== [] && listData.map((data, i) => {
          return (
            <>
              <p key={i} className="flex">
                <div className="listData">{data}</div>
                <div>
                  <button onClick={() => removeActivity(i)} className="remove_btn">
                    Remove
                  </button>
                </div>
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TodoList