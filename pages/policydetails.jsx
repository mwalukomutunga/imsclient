

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/PolicyDetails";

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
                             <Item dataField="PolicyID" />                   
	                            <Item dataField="PolicyName" />                   
	                            <Item dataField="BusinessCategory" />                   
	                            <Item dataField="InsurerId" />                   
	                            <Item dataField="BranchId" />                   
	                            <Item dataField="ProductID" />                   
	                            <Item dataField="AccountingMethod" />                   
	                            <Item dataField="PolicyFrequency" />                   
	                            <Item dataField="RegistrationDate" />                   
	                            <Item dataField="IsActive" />                   
	                            <Item dataField="BrokerComm" />                   
	                            <Item dataField="FirstTimeBuyer" />                   
	                            <Item dataField="BrokerCommissionIncl" />                   
	                            <Item dataField="OffRiskDate" />                   
	                            <Item dataField="OpenCover" />                   
	                            <Item dataField="Reference" />                   
	                            <Item dataField="PremiumReceived" />                   
	                            <Item dataField="CoverAdjusted" />                   
	                            <Item dataField="BorderauxExRate" />                   
	                            <Item dataField="LapseDate" />                   
	                            <Item dataField="CoverRenewalDate" />                   
	                            <Item dataField="AnnualPremium" />                   
	                            <Item dataField="PotentialCoverAmount" />                   
	                            <Item dataField="CumulativeCoverAmount" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default PolicyDetails;

