

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/InsuranceProducts/";

const columns = ['id','jurisdictionId','code','description','shortDescription','priority','printDescription','textEndorsement','textPermanent','productType','companyId','benefitId','isScheme'];

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
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="code" />                   
	                            <Item dataField="description" />                   
	                            <Item dataField="shortDescription" />                   
	                            <Item dataField="priority" />                   
	                            <Item dataField="printDescription" />                   
	                            <Item dataField="textEndorsement" />                   
	                            <Item dataField="textPermanent" />                   
	                            <Item dataField="productType" />                   
	                            <Item dataField="companyId" />                   
	                            <Item dataField="benefitId" />                   
	                            <Item dataField="isScheme" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default InsuranceProduct;

