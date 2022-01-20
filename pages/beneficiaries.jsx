

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Beneficiaries/";

const columns = ['id','memberNo','benefNo','dependName','postalAddress','physicalAddress','telephone','email','iDNo','relationship','photo','portion','country','bankAccountId'];

const Beneficiaries = () => {
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
        <Content Page="Beneficiaries">
            <DataTable columns={columns} dataSource={data}
                title="Beneficiaries"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="memberNo" />                   
	                            <Item dataField="benefNo" />                   
	                            <Item dataField="dependName" />                   
	                            <Item dataField="postalAddress" />                   
	                            <Item dataField="physicalAddress" />                   
	                            <Item dataField="telephone" />                   
	                            <Item dataField="email" />                   
	                            <Item dataField="iDNo" />                   
	                            <Item dataField="relationship" />                   
	                            <Item dataField="photo" />                   
	                            <Item dataField="portion" />                   
	                            <Item dataField="country" />                   
	                            <Item dataField="bankAccountId" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Beneficiaries;

