

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Currencies";

const columns = ['id','currencyCode','currencyName','active','countryID'];

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
                             <Item dataField="CurrencyCode" />                   
	                            <Item dataField="CurrencyName" />                   
	                            <Item dataField="Active" />                   
	                            <Item dataField="CountryID" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Currency;

