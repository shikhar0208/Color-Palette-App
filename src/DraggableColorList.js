import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = (props) => {
  return (
    <div style={{height: "100%"}}>
    {
      props.colors.map((color, i) => (
        <DraggableColorBox 
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => props.removeColor(color.name)} 
        />
      ))
    }
    </div>
  )
}

export default SortableContainer(DraggableColorList);