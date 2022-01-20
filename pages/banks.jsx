

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Banks/";

const columns = ['id','bankCode','bankName','countryCode','contactDetails','postalAddress','physicalAddress','remarks'];

const Bank = () => {
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
        <Content Page="Banks">
            <DataTable columns={columns} dataSource={data}
                title="Bank"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="bankCode" />                   
	                            <Item dataField="bankName" />                   
	                            <Item dataField="countryCode" />                   
	                            <Item dataField="contactDetails" />                   
	                            <Item dataField="postalAddress" />                   
	                            <Item dataField="physicalAddress" />                   
	                            <Item dataField="remarks" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Bank;

