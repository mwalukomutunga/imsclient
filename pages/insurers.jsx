

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Insurers";

const columns = ['id','jurisdictionID','tradingName','registrationNo','tAXRegistrationNo','registrationNoText','postalAddress','city','postalCode','telephone','contactPersonName','contactPersonPosition','email','bankName','bankLocationCountry','bankBranchCode','bankAccountName','bankAccountNo','bankCity','insurerStatus','firstActivated','active','version','versionUpdated','archivePolicyID','logoFileName'];

const Insurer = () => {
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
        <Content Page="Insurers">
            <DataTable columns={columns} dataSource={data}
                title="Insurer"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="JurisdictionID" />                   
	                            <Item dataField="TradingName" />                   
	                            <Item dataField="RegistrationNo" />                   
	                            <Item dataField="TAXRegistrationNo" />                   
	                            <Item dataField="RegistrationNoText" />                   
	                            <Item dataField="PostalAddress" />                   
	                            <Item dataField="City" />                   
	                            <Item dataField="PostalCode" />                   
	                            <Item dataField="Telephone" />                   
	                            <Item dataField="ContactPersonName" />                   
	                            <Item dataField="ContactPersonPosition" />                   
	                            <Item dataField="Email" />                   
	                            <Item dataField="BankName" />                   
	                            <Item dataField="BankLocationCountry" />                   
	                            <Item dataField="BankBranchCode" />                   
	                            <Item dataField="BankAccountName" />                   
	                            <Item dataField="BankAccountNo" />                   
	                            <Item dataField="BankCity" />                   
	                            <Item dataField="InsurerStatus" />                   
	                            <Item dataField="FirstActivated" />                   
	                            <Item dataField="Active" />                   
	                            <Item dataField="Version" />                   
	                            <Item dataField="VersionUpdated" />                   
	                            <Item dataField="ArchivePolicyID" />                   
	                            <Item dataField="LogoFileName" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Insurer;

