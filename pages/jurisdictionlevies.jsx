

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/JurisdictionLevies/";

const columns = ['id','jurisdictionId','levyName','levyPayee','percentageLevy','levyAmount','bankAccountId','active','version','versionUpdated','archivePolicyID','effectiveFrom','effectiveTo','excludedInPremium','showOnInvoice'];

const JurisdictionLevy = () => {
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
        <Content Page="Jurisdiction Levies">
            <DataTable columns={columns} dataSource={data}
                title="Jurisdiction Levy"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="levyName" />                   
	                            <Item dataField="levyPayee" />                   
	                            <Item dataField="percentageLevy" />                   
	                            <Item dataField="levyAmount" />                   
	                            <Item dataField="bankAccountId" />                   
	                            <Item dataField="active" />                   
	                            <Item dataField="version" />                   
	                            <Item dataField="versionUpdated" />                   
	                            <Item dataField="archivePolicyID" />                   
	                            <Item dataField="effectiveFrom" />                   
	                            <Item dataField="effectiveTo" />                   
	                            <Item dataField="excludedInPremium" />                   
	                            <Item dataField="showOnInvoice" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default JurisdictionLevy;

