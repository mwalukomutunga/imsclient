import Event from "./event";
import Border from "./border";
import Container from "./container";
const Wrapper = () => {
  return (
   <Container>
      <Event />
          <Border />
          <Event />
          <Border />
   </Container>
  );
}

export default Wrapper;