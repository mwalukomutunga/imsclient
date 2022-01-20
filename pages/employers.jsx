

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Employers/";

const columns = ['id','name','payrollNo','address','postalCode','mobilePhone','email','bankAccountId'];

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
                             <Item dataField="name" />                   
	                            <Item dataField="payrollNo" />                   
	                            <Item dataField="address" />                   
	                            <Item dataField="postalCode" />                   
	                            <Item dataField="mobilePhone" />                   
	                            <Item dataField="email" />                   
	                            <Item dataField="bankAccountId" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Employer;

