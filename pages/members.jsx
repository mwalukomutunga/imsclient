

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Members/";

const columns = ['id','jurisdictionId','title','firstNAme','middleName','lastName','fullName','address','town','postalCode','cellPhone','relationShip','payrollNo','taxId','annualIncome','identityDocument','dOB','email','ocupation'];

const Member = () => {
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
        <Content Page="Members">
            <DataTable columns={columns} dataSource={data}
                title="Member"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="title" />                   
	                            <Item dataField="firstNAme" />                   
	                            <Item dataField="middleName" />                   
	                            <Item dataField="lastName" />                   
	                            <Item dataField="fullName" />                   
	                            <Item dataField="address" />                   
	                            <Item dataField="town" />                   
	                            <Item dataField="postalCode" />                   
	                            <Item dataField="cellPhone" />                   
	                            <Item dataField="relationShip" />                   
	                            <Item dataField="payrollNo" />                   
	                            <Item dataField="taxId" />                   
	                            <Item dataField="annualIncome" />                   
	                            <Item dataField="identityDocument" />                   
	                            <Item dataField="dOB" />                   
	                            <Item dataField="email" />                   
	                            <Item dataField="ocupation" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Member;

