

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Receipts/";

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
                             <Item dataField="countryID" />                   
	                            <Item dataField="jurisdictionID" />                   
	                            <Item dataField="schemeID" />                   
	                            <Item dataField="insurerID" />                   
	                            <Item dataField="scheduleID" />                   
	                            <Item dataField="invoiceDate" />                   
	                            <Item dataField="paymentDate" />                   
	                            <Item dataField="paymentReconciled" />                   
	                            <Item dataField="amountReconciled" />                   
	                            <Item dataField="totalOutstanding" />                   
	                            <Item dataField="vAT" />                   
	                            <Item dataField="memberCount" />                   
	                            <Item dataField="totalPremium" />                   
	                            <Item dataField="totalCover" />                   
	                            <Item dataField="reminder" />                   
	                            <Item dataField="formalInvoice" />                   
	                            <Item dataField="statusID" />                   
	                            <Item dataField="archivePolicyNo" />                   
	                            <Item dataField="needsToFillIn" />                   
	                            <Item dataField="signedBy" />                   
	                            <Item dataField="approved" />                   
	                            <Item dataField="paid" />                   
	                            <Item dataField="receiptDate" />                   
	                            <Item dataField="invoiceNo" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Receipts;

