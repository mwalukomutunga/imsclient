

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Employers";

const columns = ['id','name','payrollNo','address','postalCode','mobilePhone','email','bankName'];

const Employer = () => {
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
        <Content Page="Employers">
            <DataTable columns={columns} dataSource={data}
                title="Employer"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="Name" />                   
	                            <Item dataField="PayrollNo" />                   
	                            <Item dataField="Address" />                   
	                            <Item dataField="PostalCode" />                   
	                            <Item dataField="MobilePhone" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="BankName" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Employer;

