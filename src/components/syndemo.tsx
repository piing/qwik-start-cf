/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import type {
  GroupSettingsModel,
  EditSettingsModel,
  ContextMenuItem,
} from "@syncfusion/ej2-react-grids";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  ContextMenu,
  Edit,
  Filter,
  Group,
  Inject,
  Page,
  Sort,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";
import { data } from '~/components/datasource';

export const Example = qwikify$(() => {
  const groupOptions: GroupSettingsModel = { showGroupedColumn: true };
  const contextMenuItems: ContextMenuItem[] = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "Copy",
    "Edit",
    "Delete",
    "Save",
    "Cancel",
    "PdfExport",
    "ExcelExport",
    "CsvExport",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];
  const editing: EditSettingsModel = {
    allowDeleting: true,
    allowEditing: true,
  };
  return (<>
    <h6>SYNDEMO</h6>
    <div>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        allowSorting={true}
        allowExcelExport={true}
        allowPdfExport={true}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        allowGrouping={true}
        groupSettings={groupOptions}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            width="140"
            textAlign="Right"
            isPrimaryKey={true}
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer Name"
            width="140"
          />
          <ColumnDirective
            field="Freight"
            headerText="Freight"
            format="C2"
            textAlign="Right"
            editType="numericedit"
            width="140"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            width="200"
          />
        </ColumnsDirective>
        <Inject
          services={[
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Group,
          ]}
        />
      </GridComponent>
    </div>
    </>
  )
    }
    ,{ eagerness: 'visible' }
  );


