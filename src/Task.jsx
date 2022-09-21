import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

// Temporary Handler for drag n drop
// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightGreen" : "white")};
`;

export default function Task({ task, idx }) {
  return (
    <Draggable draggableId={task.id} index={idx}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {/* <Handle {...provided.dragHandleProps} /> */}
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}
