

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Jurisdictions";

const columns = ['id','jurisdictionID','jurisdictionName','jurisdictionCode','countryID','currencyID','bankName','bankLocationCountry','bankCity','bankBranchCode','bankAccountName','bankAccountNo','vATBankCity','vATBankName','vATBankLocation','vATBankBranchCode','vATBankAccountName','vATBankAccountNo','gMTTimeOffset','active','version','versionUpdated','localCurrencyID'];

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
                             <Item dataField="JurisdictionID" />                   
	                            <Item dataField="JurisdictionName" />                   
	                            <Item dataField="JurisdictionCode" />                   
	                            <Item dataField="CountryID" />                   
	                            <Item dataField="CurrencyID" />                   
	                            <Item dataField="BankName" />                   
	                            <Item dataField="BankLocationCountry" />                   
	                            <Item dataField="BankCity" />                   
	                            <Item dataField="BankBranchCode" />                   
	                            <Item dataField="BankAccountName" />                   
	                            <Item dataField="BankAccountNo" />                   
	                            <Item dataField="VATBankCity" />                   
	                            <Item dataField="VATBankName" />                   
	                            <Item dataField="VATBankLocation" />                   
	                            <Item dataField="VATBankBranchCode" />                   
	                            <Item dataField="VATBankAccountName" />                   
	                            <Item dataField="VATBankAccountNo" />                   
	                            <Item dataField="GMTTimeOffset" />                   
	                            <Item dataField="Active" />                   
	                            <Item dataField="Version" />                   
	                            <Item dataField="VersionUpdated" />                   
	                            <Item dataField="LocalCurrencyID" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Jurisdiction;

