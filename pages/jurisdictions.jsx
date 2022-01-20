

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Jurisdictions/";

const columns = ['id','jurisdictionName','jurisdictionCode','countryId','currencyId','bankAccountId','vatBankAccountId','gMTTimeOffset','active','version','versionUpdated','localCurrencyId'];

const Jurisdiction = () => {
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
        <Content Page="Jurisdictions">
            <DataTable columns={columns} dataSource={data}
                title="Jurisdiction"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="jurisdictionName" />                   
	                            <Item dataField="jurisdictionCode" />                   
	                            <Item dataField="countryId" />                   
	                            <Item dataField="currencyId" />                   
	                            <Item dataField="bankAccountId" />                   
	                            <Item dataField="vatBankAccountId" />                   
	                            <Item dataField="gMTTimeOffset" />                   
	                            <Item dataField="active" />                   
	                            <Item dataField="version" />                   
	                            <Item dataField="versionUpdated" />                   
	                            <Item dataField="localCurrencyId" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Jurisdiction;

