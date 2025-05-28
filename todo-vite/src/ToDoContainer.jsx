import React, { Fragment } from 'react'

const ToDoContainer = (props) => {
  let {items,handleDelete,handleEdit,clearAlldata} = props
  return (
    <>
      <table border={1} cellSpacing={0} cellPadding={1} width="100%">
        <thead>
          <tr>
            <th>Cource</th>
            <th>Trainer</th>
            <th>More Options</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 && items.map((val)=>{
            return(
              <Fragment key={val.id}>
                <tr>
                  <td>{val.cource}</td>
                  <td>{val.trainer}</td>
                  <td>
                    <button className='editbtn' onClick={()=>{handleEdit(val.id)}}>Edit</button>
                    <button className='deleteBtn' onClick={()=>{handleDelete(val.id)}}>Delete</button>
                  </td>
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </table>

      <div className='clearAllbtn'>
        <button onClick={clearAlldata}>Clear All</button>
      </div>
    </>
  )
}

export default ToDoContainer
