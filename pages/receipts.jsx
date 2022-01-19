

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Receipts";

const columns = ['id','countryID','jurisdictionID','schemeID','insurerID','scheduleID','invoiceDate','paymentDate','paymentReconciled','amountReconciled','totalOutstanding','vAT','memberCount','totalPremium','totalCover','reminder','formalInvoice','statusID','archivePolicyNo','needsToFillIn','signedBy','approved','paid','receiptDate','invoiceNo'];

const Receipts = () => {
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
        <Content Page="Receipts">
            <DataTable columns={columns} dataSource={data}
                title="Receipts"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                <Form colCount={2}>
                             <Item dataField="CountryID" />                   
	                            <Item dataField="JurisdictionID" />                   
	                            <Item dataField="SchemeID" />                   
	                            <Item dataField="InsurerID" />                   
	                            <Item dataField="ScheduleID" />                   
	                            <Item dataField="InvoiceDate" />                   
	                            <Item dataField="PaymentDate" />                   
	                            <Item dataField="PaymentReconciled" />                   
	                            <Item dataField="AmountReconciled" />                   
	                            <Item dataField="TotalOutstanding" />                   
	                            <Item dataField="VAT" />                   
	                            <Item dataField="MemberCount" />                   
	                            <Item dataField="TotalPremium" />                   
	                            <Item dataField="TotalCover" />                   
	                            <Item dataField="Reminder" />                   
	                            <Item dataField="FormalInvoice" />                   
	                            <Item dataField="StatusID" />                   
	                            <Item dataField="ArchivePolicyNo" />                   
	                            <Item dataField="NeedsToFillIn" />                   
	                            <Item dataField="SignedBy" />                   
	                            <Item dataField="Approved" />                   
	                            <Item dataField="Paid" />                   
	                            <Item dataField="ReceiptDate" />                   
	                            <Item dataField="InvoiceNo" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Receipts;

