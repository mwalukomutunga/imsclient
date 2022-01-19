

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/InsuranceProducts";

const columns = ['id','productID','priority','code','description','shortDescription','printDescription','textEndorsement','textPermanent','productType','companyID','isScheme'];

const InsuranceProduct = () => {
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
        <Content Page="Insurance Products">
            <DataTable columns={columns} dataSource={data}
                title="Insurance Product"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="ProductID" />                   
	                            <Item dataField="Priority" />                   
	                            <Item dataField="Code" />                   
	                            <Item dataField="Description" />                   
	                            <Item dataField="ShortDescription" />                   
	                            <Item dataField="PrintDescription" />                   
	                            <Item dataField="TextEndorsement" />                   
	                            <Item dataField="TextPermanent" />                   
	                            <Item dataField="ProductType" />                   
	                            <Item dataField="CompanyID" />                   
	                            <Item dataField="IsScheme" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default InsuranceProduct;

