

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Insurers/";

const columns = ['id','jurisdictionId','tradingName','registrationNo','tAXRegistrationNo','registrationNoText','postalAddress','city','postalCode','telephone','contactPersonName','contactPersonPosition','email','bankAccountId','insurerStatus','firstActivated','active','version','versionUpdated','archivePolicyID','logoFileName'];

const Insurer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        requests.get(page).then(response => {
            setData(response);
        })
    }, []);

    const handleSave = (e) => {
        requests.post(page, e);
    }
    const handleDelete = (e) => {
        requests.del(page + e.id);
    }
    const handleUpdate = (e) => {
        requests.put(page + e.id, e);
    }

    return (
        <Content Page="Insurers">
            <DataTable columns={columns} dataSource={data}
                title="Insurer"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="tradingName" />                   
	                            <Item dataField="registrationNo" />                   
	                            <Item dataField="tAXRegistrationNo" />                   
	                            <Item dataField="registrationNoText" />                   
	                            <Item dataField="postalAddress" />                   
	                            <Item dataField="city" />                   
	                            <Item dataField="postalCode" />                   
	                            <Item dataField="telephone" />                   
	                            <Item dataField="contactPersonName" />                   
	                            <Item dataField="contactPersonPosition" />                   
	                            <Item dataField="email" />                   
	                            <Item dataField="bankAccountId" />                   
	                            <Item dataField="insurerStatus" />                   
	                            <Item dataField="firstActivated" />                   
	                            <Item dataField="active" />                   
	                            <Item dataField="version" />                   
	                            <Item dataField="versionUpdated" />                   
	                            <Item dataField="archivePolicyID" />                   
	                            <Item dataField="logoFileName" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Insurer;

