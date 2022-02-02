import Title from "./title";
import Content from "./Content";

const Container = ({children}) => {
    return ( 
        <section id="full-schedule">
        <div className="container">
          <Title />
          <Content>
           {children}
          </Content>
        </div>
      </section>
     );
}
 
export default Container;