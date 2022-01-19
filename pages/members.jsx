

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Members";

const columns = ['id','title','firstNAme','middleName','lastName','fullName','address','town','postalCode','cellPhone','relationShip','payrollNo','taxId','annualIncome','identityDocument','dOB','email','ocupation'];

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
                             <Item dataField="Title" />                   
	                            <Item dataField="FirstNAme" />                   
	                            <Item dataField="MiddleName" />                   
	                            <Item dataField="LastName" />                   
	                            <Item dataField="FullName" />                   
	                            <Item dataField="Address" />                   
	                            <Item dataField="Town" />                   
	                            <Item dataField="PostalCode" />                   
	                            <Item dataField="CellPhone" />                   
	                            <Item dataField="RelationShip" />                   
	                            <Item dataField="PayrollNo" />                   
	                            <Item dataField="TaxId" />                   
	                            <Item dataField="AnnualIncome" />                   
	                            <Item dataField="IdentityDocument" />                   
	                            <Item dataField="DOB" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="Ocupation" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Member;

