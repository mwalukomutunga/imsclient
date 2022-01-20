

import { useEffect, useState } from 'react';
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import requests from '../agent';
const page = "/Invoices/";

const columns = ['id','jurisdictionID','insurerID','scheduleID','paymentDate','paymentReconciled','amountReconciled','totalOutstanding','vAT','noOfMembers','totalPremium','totalCover','reminder','formalInvoice','statusID','archivePolicyNo','needsToFillIn','invoiceDate','signedBy','approved','paid'];

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
                             <Item dataField="jurisdictionID" />                   
	                            <Item dataField="insurerID" />                   
	                            <Item dataField="scheduleID" />                   
	                            <Item dataField="paymentDate" />                   
	                            <Item dataField="paymentReconciled" />                   
	                            <Item dataField="amountReconciled" />                   
	                            <Item dataField="totalOutstanding" />                   
	                            <Item dataField="vAT" />                   
	                            <Item dataField="noOfMembers" />                   
	                            <Item dataField="totalPremium" />                   
	                            <Item dataField="totalCover" />                   
	                            <Item dataField="reminder" />                   
	                            <Item dataField="formalInvoice" />                   
	                            <Item dataField="statusID" />                   
	                            <Item dataField="archivePolicyNo" />                   
	                            <Item dataField="needsToFillIn" />                   
	                            <Item dataField="invoiceDate" />                   
	                            <Item dataField="signedBy" />                   
	                            <Item dataField="approved" />                   
	                            <Item dataField="paid" />                   
	                                   
                </Form>
            </DataTable>

        </Content>
    );
}

export default Invoice;

