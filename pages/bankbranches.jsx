

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/BankBranches/";

const columns = ['id','branchCode','branchName','countryCode','bankCode','contactDetails','postalAddress','physicalAddress','remarks'];

const BankBranch = () => {
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
        <Content Page="Bank Branches">
            <DataTable columns={columns} dataSource={data}
                title="Bank Branch"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="branchCode" />                   
	                            <Item dataField="branchName" />                   
	                            <Item dataField="countryCode" />                   
	                            <Item dataField="bankCode" />                   
	                            <Item dataField="contactDetails" />                   
	                            <Item dataField="postalAddress" />                   
	                            <Item dataField="physicalAddress" />                   
	                            <Item dataField="remarks" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default BankBranch;

