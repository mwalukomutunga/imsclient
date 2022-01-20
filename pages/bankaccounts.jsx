

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/BankAccounts/";

const columns = ['id','jurisdictionId','bankId','branchId','accName','accNumber','gLAcc','remarks'];

const BankAccount = () => {
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
        <Content Page="Bank Accounts">
            <DataTable columns={columns} dataSource={data}
                title="Bank Account"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="bankId" />                   
	                            <Item dataField="branchId" />                   
	                            <Item dataField="accName" />                   
	                            <Item dataField="accNumber" />                   
	                            <Item dataField="gLAcc" />                   
	                            <Item dataField="remarks" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default BankAccount;

