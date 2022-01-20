

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/PolicyDetails/";

const columns = ['id','policyID','policyName','businessCategory','insurerId','branchId','productID','accountingMethod','policyFrequency','registrationDate','isActive','brokerComm','firstTimeBuyer','brokerCommissionIncl','offRiskDate','openCover','reference','premiumReceived','coverAdjusted','borderauxExRate','lapseDate','coverRenewalDate','annualPremium','potentialCoverAmount','cumulativeCoverAmount'];

const PolicyDetails = () => {
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
        <Content Page="Policy Details">
            <DataTable columns={columns} dataSource={data}
                title="Policy Details"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="policyID" />                   
	                            <Item dataField="policyName" />                   
	                            <Item dataField="businessCategory" />                   
	                            <Item dataField="insurerId" />                   
	                            <Item dataField="branchId" />                   
	                            <Item dataField="productID" />                   
	                            <Item dataField="accountingMethod" />                   
	                            <Item dataField="policyFrequency" />                   
	                            <Item dataField="registrationDate" />                   
	                            <Item dataField="isActive" />                   
	                            <Item dataField="brokerComm" />                   
	                            <Item dataField="firstTimeBuyer" />                   
	                            <Item dataField="brokerCommissionIncl" />                   
	                            <Item dataField="offRiskDate" />                   
	                            <Item dataField="openCover" />                   
	                            <Item dataField="reference" />                   
	                            <Item dataField="premiumReceived" />                   
	                            <Item dataField="coverAdjusted" />                   
	                            <Item dataField="borderauxExRate" />                   
	                            <Item dataField="lapseDate" />                   
	                            <Item dataField="coverRenewalDate" />                   
	                            <Item dataField="annualPremium" />                   
	                            <Item dataField="potentialCoverAmount" />                   
	                            <Item dataField="cumulativeCoverAmount" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default PolicyDetails;

