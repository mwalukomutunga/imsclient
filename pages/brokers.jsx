

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Brokers";

const columns = ['id','title','name','address','postalCode','mobilePhone','email','bankName','bankLocationCountry','bankBranchCode','bankAccountName','bankAccountNo','bankCity'];

const Broker = () => {
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
        <Content Page="Brokers">
            <DataTable columns={columns} dataSource={data}
                title="Broker"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="Title" />                   
	                            <Item dataField="Name" />                   
	                            <Item dataField="Address" />                   
	                            <Item dataField="PostalCode" />                   
	                            <Item dataField="MobilePhone" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="BankName" />                   
	                            <Item dataField="BankLocationCountry" />                   
	                            <Item dataField="BankBranchCode" />                   
	                            <Item dataField="BankAccountName" />                   
	                            <Item dataField="BankAccountNo" />                   
	                            <Item dataField="BankCity" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Broker;

