import React from 'react';
import DataGrid, { Sorting, FilterPanel, HeaderFilter, Export, FilterRow, Selection, Paging, Pager,Editing,Popup } from 'devextreme-react/data-grid';

const DataTable = ({ columns, dataSource, handlesave,handleDelete,handleUpdate, title, width, height, children }) => {
    const saving = (e) => {
        handlesave(e.data);
    }
    const deleterecord = (e) => {
        handleDelete(e.data);
    }
    const updaterecord = (e) => {
        handleUpdate(e.data);
    }
    const pageSizes = [10, 25, 50, 100];
    return (
        <DataGrid
            dataSource={dataSource}
            columnsAutoWidth="true"
            defaultColumns={columns}
            showBorders={true}
            showRowLines={true}
            rowAlternationEnabled={false}
            columnHidingEnabled={false}
            onRowInserting={(e) => saving(e)}
            onRowRemoving={deleterecord}
            onRowUpdated={updaterecord}
        >
             <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true}
                    >
                        <Popup title={title} showTitle={true} width={width} height={height} />
            {children}
           </Editing>
            <Selection mode="single" />
            <Sorting mode="multiple" />
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <HeaderFilter visible={true} />
            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} showNavigationButtons={true} />
            <Paging defaultPageSize={10} />
            <Export enabled={true} allowExportSelectedData={false} />
        </DataGrid>
    );
}

export default DataTable;
