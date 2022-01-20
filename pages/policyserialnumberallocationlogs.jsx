

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/PolicySerialNumberAllocationLogs/";

const columns = ['id','policyNumber','issued'];

const PolicySerialNumberAllocationLog = () => {
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
        <Content Page="Policy Serial Number Allocation Logs">
            <DataTable columns={columns} dataSource={data}
                title="Policy Serial Number Allocation Log"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="policyNumber" />                   
	                            <Item dataField="issued" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default PolicySerialNumberAllocationLog;

