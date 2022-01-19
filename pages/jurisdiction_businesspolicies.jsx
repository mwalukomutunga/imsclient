

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Jurisdiction_BusinessPolicies";

const columns = ['id','jurisdictionID','vAT','taxOnGDPW','taxOnUMFee','reInsurerTax','minReInsurerQuotaShare','nonResidentTax','dateFrom','dateTo'];

const JurisdictionBusinessPolicies = () => {
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
        <Content Page="Jurisdiction Businesspolicies">
            <DataTable columns={columns} dataSource={data}
                title="Jurisdiction Businesspolicies"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="JurisdictionID" />                   
	                            <Item dataField="VAT" />                   
	                            <Item dataField="TaxOnGDPW" />                   
	                            <Item dataField="TaxOnUMFee" />                   
	                            <Item dataField="ReInsurerTax" />                   
	                            <Item dataField="MinReInsurerQuotaShare" />                   
	                            <Item dataField="NonResidentTax" />                   
	                            <Item dataField="DateFrom" />                   
	                            <Item dataField="DateTo" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default JurisdictionBusinessPolicies;

