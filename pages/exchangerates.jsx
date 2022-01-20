

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/ExchangeRates/";

const columns = ['id','fromCurr','toCurr','multiplier','divisor','effectiveDate','remarks'];

const ExchangeRates = () => {
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
        <Content Page="Exchange Rates">
            <DataTable columns={columns} dataSource={data}
                title="Exchange Rates"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="fromCurr" />                   
	                            <Item dataField="toCurr" />                   
	                            <Item dataField="multiplier" />                   
	                            <Item dataField="divisor" />                   
	                            <Item dataField="effectiveDate" />                   
	                            <Item dataField="remarks" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default ExchangeRates;

