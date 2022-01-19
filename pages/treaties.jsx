

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Treaties";

const columns = ['id','treatyID','oldTreatyNo','name','code','group','description','line','startDate','endDate','currency','limit','retention','cashLoss','ethQCommissionPct','oldCode','insurerId','treatyGroupID'];

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
                             <Item dataField="TreatyID" />                   
	                            <Item dataField="OldTreatyNo" />                   
	                            <Item dataField="Name" />                   
	                            <Item dataField="Code" />                   
	                            <Item dataField="Group" />                   
	                            <Item dataField="Description" />                   
	                            <Item dataField="Line" />                   
	                            <Item dataField="StartDate" />                   
	                            <Item dataField="EndDate" />                   
	                            <Item dataField="Currency" />                   
	                            <Item dataField="Limit" />                   
	                            <Item dataField="Retention" />                   
	                            <Item dataField="CashLoss" />                   
	                            <Item dataField="EthQCommissionPct" />                   
	                            <Item dataField="OldCode" />                   
	                            <Item dataField="InsurerId" />                   
	                            <Item dataField="TreatyGroupID" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Treaty;

