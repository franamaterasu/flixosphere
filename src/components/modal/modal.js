import { useDispatch } from "react-redux";
import { closeModal } from "../../features/films/filmsSlice";

import {
  Container,
  Wrapper,
  Header,
  IconClose,
  Info,
  IconList,
  Text,
} from "./modal.styled.js";

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <IconClose onClick={handleCloseModal} />
        </Header>
        <Info>
          <IconList />
          <Text>This film exists in the list</Text>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Modal;
