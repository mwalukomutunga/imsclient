

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Beneficiaries";

const columns = ['id','memberNo','benefNo','dependName','postalAddress','physicalAddress','telephone','email','iDNo','relationship','photo','portion','country','bank','branch','accNo','accName'];

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
                             <Item dataField="MemberNo" />                   
	                            <Item dataField="BenefNo" />                   
	                            <Item dataField="DependName" />                   
	                            <Item dataField="PostalAddress" />                   
	                            <Item dataField="PhysicalAddress" />                   
	                            <Item dataField="Telephone" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="IDNo" />                   
	                            <Item dataField="Relationship" />                   
	                            <Item dataField="Photo" />                   
	                            <Item dataField="Portion" />                   
	                            <Item dataField="Country" />                   
	                            <Item dataField="Bank" />                   
	                            <Item dataField="Branch" />                   
	                            <Item dataField="AccNo" />                   
	                            <Item dataField="AccName" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Beneficiaries;

