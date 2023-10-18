import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Grid, Resize, Sort, Group, ContextMenu, Edit, Page, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data  } from './datasource';

 
// Grid data
/*
const data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    }
];


export default component$(() => {
    
    useVisibleTask$(()=>{
        let grid: Grid = new Grid({
            dataSource: data,
            columns: [
                    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                    { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                    { field: 'EmployeeID', width: 140, headerText: 'Employee ID', textAlign: 'Right', type: 'string' },
                    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                    { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
            ]
        });
        grid.appendTo('#Grid');
    })
  return (
    <>
      <h5>hello</h5>
      <div>
            
            <div id="Grid"></div>
        </div>
    </>
  );
});
*/
export default component$(() => {
    
  useVisibleTask$(()=>{
      Grid.Inject(Resize, Sort, Group, Edit, ContextMenu, Page, PdfExport, ExcelExport);

      let grid: Grid = new Grid({
          dataSource: data,
          allowSorting: true,
          allowPaging: true,
          editSettings: {allowEditing: true, allowDeleting: true},
          allowPdfExport: true,
          allowExcelExport: true,
          contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
                      'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
                      'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
                      'LastPage', 'NextPage'],
          columns: [
              { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right'},
              { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
              { field: 'ShipName', headerText: 'Ship Name', width: 300 },
              { field: 'ShipCountry', headerText: 'Ship Country',  width: 200 },
              { field: 'ShipCity', headerText: 'Ship City', width: 200 }
          ]
      });
      grid.appendTo('#Grid');
  })
return (
  <>
    <h5>hello</h5>
    <div>
          
          <div id="Grid"></div>
      </div>
  </>
);
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
