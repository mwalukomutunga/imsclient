

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/ReInsurers";

const columns = ['id','jurisdictionID','tradingName','registrationNo','localTaxRefNo','postalAddress','boxNumber','city','areaCode','contactPerson','contactPersonPosition','contactPhone','fax','cell','email','bankName','bankLocationCountry','bankCity','bankBranchCode','bankAccountName','bankAccountNo','statusID','active','version','versionUpdated','archivePolicyID','effectiveFrom','effectiveTo'];

const ReInsurer = () => {
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
        <Content Page="Re Insurers">
            <DataTable columns={columns} dataSource={data}
                title="Re Insurer"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="JurisdictionID" />                   
	                            <Item dataField="TradingName" />                   
	                            <Item dataField="RegistrationNo" />                   
	                            <Item dataField="LocalTaxRefNo" />                   
	                            <Item dataField="PostalAddress" />                   
	                            <Item dataField="BoxNumber" />                   
	                            <Item dataField="City" />                   
	                            <Item dataField="AreaCode" />                   
	                            <Item dataField="ContactPerson" />                   
	                            <Item dataField="ContactPersonPosition" />                   
	                            <Item dataField="ContactPhone" />                   
	                            <Item dataField="Fax" />                   
	                            <Item dataField="Cell" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="BankName" />                   
	                            <Item dataField="BankLocationCountry" />                   
	                            <Item dataField="BankCity" />                   
	                            <Item dataField="BankBranchCode" />                   
	                            <Item dataField="BankAccountName" />                   
	                            <Item dataField="BankAccountNo" />                   
	                            <Item dataField="StatusID" />                   
	                            <Item dataField="Active" />                   
	                            <Item dataField="Version" />                   
	                            <Item dataField="VersionUpdated" />                   
	                            <Item dataField="ArchivePolicyID" />                   
	                            <Item dataField="EffectiveFrom" />                   
	                            <Item dataField="EffectiveTo" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default ReInsurer;

