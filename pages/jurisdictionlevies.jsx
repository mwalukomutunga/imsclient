

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/JurisdictionLevies";

const columns = ['id','jursidictionID','levyName','levyPayee','percentageLevy','levyAmount','bankName','bankLocationCountry','bankBranchCode','bankAccountName','bankAccountNo','city','active','version','versionUpdated','archivePolicyID','effectiveFrom','effectiveTo','excludedInPremium','showOnInvoice'];

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
                             <Item dataField="JursidictionID" />                   
	                            <Item dataField="LevyName" />                   
	                            <Item dataField="LevyPayee" />                   
	                            <Item dataField="PercentageLevy" />                   
	                            <Item dataField="LevyAmount" />                   
	                            <Item dataField="BankName" />                   
	                            <Item dataField="BankLocationCountry" />                   
	                            <Item dataField="BankBranchCode" />                   
	                            <Item dataField="BankAccountName" />                   
	                            <Item dataField="BankAccountNo" />                   
	                            <Item dataField="City" />                   
	                            <Item dataField="Active" />                   
	                            <Item dataField="Version" />                   
	                            <Item dataField="VersionUpdated" />                   
	                            <Item dataField="ArchivePolicyID" />                   
	                            <Item dataField="EffectiveFrom" />                   
	                            <Item dataField="EffectiveTo" />                   
	                            <Item dataField="ExcludedInPremium" />                   
	                            <Item dataField="ShowOnInvoice" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default JurisdictionLevy;

