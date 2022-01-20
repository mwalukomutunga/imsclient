

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Benefits/";

const columns = ['id','name','description','category','benefitClass','productType'];

const Benefit = () => {
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
        <Content Page="Benefits">
            <DataTable columns={columns} dataSource={data}
                title="Benefit"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="name" />                   
	                            <Item dataField="description" />                   
	                            <Item dataField="category" />                   
	                            <Item dataField="benefitClass" />                   
	                            <Item dataField="productType" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Benefit;

