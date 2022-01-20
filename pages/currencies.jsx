

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Currencies/";

const columns = ['id','currencyCode','currencyName','currPrec','active'];

const Currency = () => {
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
        <Content Page="Currencies">
            <DataTable columns={columns} dataSource={data}
                title="Currency"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="currencyCode" />                   
	                            <Item dataField="currencyName" />                   
	                            <Item dataField="currPrec" />                   
	                            <Item dataField="active" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Currency;

