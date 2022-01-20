

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Treaties/";

const columns = ['id','oldTreatyNo','code','name','description','line','startDate','endDate','currency','limit','retention','cashLoss','ethQCommissionPct','oldCode','insurerId','treatyGroupID'];

const Treaty = () => {
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
        <Content Page="Treaties">
            <DataTable columns={columns} dataSource={data}
                title="Treaty"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="oldTreatyNo" />                   
	                            <Item dataField="code" />                   
	                            <Item dataField="name" />                   
	                            <Item dataField="description" />                   
	                            <Item dataField="line" />                   
	                            <Item dataField="startDate" />                   
	                            <Item dataField="endDate" />                   
	                            <Item dataField="currency" />                   
	                            <Item dataField="limit" />                   
	                            <Item dataField="retention" />                   
	                            <Item dataField="cashLoss" />                   
	                            <Item dataField="ethQCommissionPct" />                   
	                            <Item dataField="oldCode" />                   
	                            <Item dataField="insurerId" />                   
	                            <Item dataField="treatyGroupID" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Treaty;

