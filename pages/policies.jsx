

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Policies";

const columns = ['id','policyNumber','policyName','parentPolicyID','policySchemeNumber'];

const Policy = () => {
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
        <Content Page="Policies">
            <DataTable columns={columns} dataSource={data}
                title="Policy"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="PolicyNumber" />                   
	                            <Item dataField="PolicyName" />                   
	                            <Item dataField="ParentPolicyID" />                   
	                            <Item dataField="PolicySchemeNumber" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Policy;

