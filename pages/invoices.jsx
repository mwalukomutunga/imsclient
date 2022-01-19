

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Invoices";

const columns = ['id','countryID','jurisdictionID','lendingBankID','insurerID','scheduleID','paymentDate','paymentReconciled','amountReconciled','totalOutstanding','vAT','noOfMembers','totalPremium','totalCover','reminder','formalInvoice','statusID','archivePolicyNo','needsToFillIn','invoiceDate','signedBy','approved','paid'];

const Invoice = () => {
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
        <Content Page="Invoices">
            <DataTable columns={columns} dataSource={data}
                title="Invoice"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="CountryID" />                   
	                            <Item dataField="JurisdictionID" />                   
	                            <Item dataField="LendingBankID" />                   
	                            <Item dataField="InsurerID" />                   
	                            <Item dataField="ScheduleID" />                   
	                            <Item dataField="PaymentDate" />                   
	                            <Item dataField="PaymentReconciled" />                   
	                            <Item dataField="AmountReconciled" />                   
	                            <Item dataField="TotalOutstanding" />                   
	                            <Item dataField="VAT" />                   
	                            <Item dataField="NoOfMembers" />                   
	                            <Item dataField="TotalPremium" />                   
	                            <Item dataField="TotalCover" />                   
	                            <Item dataField="Reminder" />                   
	                            <Item dataField="FormalInvoice" />                   
	                            <Item dataField="StatusID" />                   
	                            <Item dataField="ArchivePolicyNo" />                   
	                            <Item dataField="NeedsToFillIn" />                   
	                            <Item dataField="InvoiceDate" />                   
	                            <Item dataField="SignedBy" />                   
	                            <Item dataField="Approved" />                   
	                            <Item dataField="Paid" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Invoice;

