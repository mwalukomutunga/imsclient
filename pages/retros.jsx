

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/ReTros/";

const columns = ['id','insurerId','reInsurerId','reInsurerQuotaShare','effectiveFrom','effectiveTo','payInsurerComm'];

const ReTro = () => {
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
        <Content Page="Re Tros">
            <DataTable columns={columns} dataSource={data}
                title="Re Tro"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="insurerId" />                   
	                            <Item dataField="reInsurerId" />                   
	                            <Item dataField="reInsurerQuotaShare" />                   
	                            <Item dataField="effectiveFrom" />                   
	                            <Item dataField="effectiveTo" />                   
	                            <Item dataField="payInsurerComm" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default ReTro;

