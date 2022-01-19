

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/BatchScheduleNos";

const columns = ['id','jurisdictionID','reinsurerId','numberOfSchedules','batchStartDate'];

const BatchScheduleNo = () => {
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
        <Content Page="Batch Schedule Nos">
            <DataTable columns={columns} dataSource={data}
                title="Batch Schedule No"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="JurisdictionID" />                   
	                            <Item dataField="ReinsurerId" />                   
	                            <Item dataField="NumberOfSchedules" />                   
	                            <Item dataField="BatchStartDate" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default BatchScheduleNo;

