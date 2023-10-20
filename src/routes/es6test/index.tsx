import { component$, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Toolbar, Grid, Edit } from '@syncfusion/ej2-grids';
import { data,DataInter  } from './datasource';

/*
interface DataListInter {
  list: DataInter[];
}
*/
export default component$(() => {
  
  const store = useStore<DataInter[]>(data);
  //onst DM=new  DataManager(data);

  console.log('Render: <App>');
  
  useTask$(({ track }) => {
    track(() => store);
    console.log('useTask:track'+store);
  });


  
  useVisibleTask$(()=>{
    Grid.Inject(Edit, Toolbar);
    const grid: Grid = new Grid({
        dataSource: store,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        height: 265,
        enablePersistence:true,

    });
    grid.appendTo('#Grid');
    /*
    document.getElementById('updatebutton').addEventListener('click', function(e) {
      store.list=grid.getCurrentViewRecords as unknown as DataInter[];
    });
    */
          

      /*
      function rowselected(e:RowSelectEventArgs):void{
        alert(e.data);
      };
      */

     const updatebtnf=()=>{
      /*
      store.map((item,index)=>{
          item.CustomerID=item.CustomerID+"!"
        });
        store.push({
          CustomerID: "zzzzzzz", OrderID: 1233, Freight: 99.99, ShipCity: "TZ",
          EmployeeID: 0,
          OrderDate: new Date(8364186e4),
          ShipName: "",
          ShipAddress: "",
          ShipRegion: "",
          ShipPostalCode: "",
          ShipCountry: "",
          Verified: false
        });
        */
        console.log(store[0].CustomerID);
       console.log(store[1].CustomerID);
       store[0].CustomerID="xxx";
       //store.reverse();
        grid.refresh();
        console.log(store[0].CustomerID);
        console.log(store[1].CustomerID);
      };
     document.getElementById("updatebutton")?.addEventListener('click', updatebtnf);
  });
return (
  <>
    <h5>hello</h5>

          
    <div id='container'>
        <div id='Grid'></div>
    </div>
          <hr/>
          <button id="updatebutton">Update</button>
      <ul>
        {store.map((item, index) => (
          <li key={`items-${index}`}>{item.OrderID+item.CustomerID}</li>
        ))}
      </ul>
      <hr/>
      
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