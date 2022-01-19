
import Content from "../components/content";
import DataTable from "../components/Table";
const About = () => {
    const columns = ['County','Name of FSC', 'Phone Number','Sub County','Ward','Inputs ','PHHs ','Mechanisation ','Soil Testing','Spraying ','Markets','Finance '];
    return (
            <Content Page="FCS Streams" >
                <DataTable columns ={columns} dataSource ="data/streams.json"/>
            </Content>
    );
}
 
export default About;