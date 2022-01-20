

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/ReInsurers/";

const columns = ['id','jurisdictionId','tradingName','registrationNo','localTaxRefNo','postalAddress','boxNumber','city','areaCode','contactPerson','contactPersonPosition','contactPhone','fax','cell','email','bankAccountId','statusId','active','version','versionUpdated','archivePolicyID','effectiveFrom','effectiveTo'];

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
                             <Item dataField="jurisdictionId" />                   
	                            <Item dataField="tradingName" />                   
	                            <Item dataField="registrationNo" />                   
	                            <Item dataField="localTaxRefNo" />                   
	                            <Item dataField="postalAddress" />                   
	                            <Item dataField="boxNumber" />                   
	                            <Item dataField="city" />                   
	                            <Item dataField="areaCode" />                   
	                            <Item dataField="contactPerson" />                   
	                            <Item dataField="contactPersonPosition" />                   
	                            <Item dataField="contactPhone" />                   
	                            <Item dataField="fax" />                   
	                            <Item dataField="cell" />                   
	                            <Item dataField="email" />                   
	                            <Item dataField="bankAccountId" />                   
	                            <Item dataField="statusId" />                   
	                            <Item dataField="active" />                   
	                            <Item dataField="version" />                   
	                            <Item dataField="versionUpdated" />                   
	                            <Item dataField="archivePolicyID" />                   
	                            <Item dataField="effectiveFrom" />                   
	                            <Item dataField="effectiveTo" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default ReInsurer;

