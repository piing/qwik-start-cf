import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {TabulatorFull as Tabulator} from 'tabulator-tables';

//define some sample data
const tabledata = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];

export default component$(() => {
  const store = useStore({list:tabledata},{deep:true});
  //let DM=new  DataManager(data);

  console.log('Render: <App>');
  
  useVisibleTask$(({ track }) => {
    track(() => store.list);
    console.log('useTask:track'+store.list);
  });

  useVisibleTask$(()=>{
    //create Tabulator on DOM element with id "example-table"
    const table = new Tabulator("#example-table", {
      reactiveData:true,
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:store.list, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Name", field:"name", width:150,editor:"input"},
        {title:"Age", field:"age", hozAlign:"left", formatter:"progress",editor:"input"},
        {title:"Favourite Color", field:"col",editor:"input"},
        {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center",editor:"date"},
    ],
    });

    //trigger an alert message when the row is clicked
    /*
    table.on("rowClick", function(e, row){ 
    alert("Row " + row.getData().id + " Clicked!!!!");
    });
    */
  })

  return (
    <>
        <div id="example-table"></div>
        <hr/>
          <button id="updatebutton" onClick$={()=>{store.list[0].name='xxxxx';}}>Update</button>
      <ul>
        {store.list.map((item, index) => (
          <li key={`items-${index}`}>{item.name}</li>
        ))}
      </ul>

    </>
  );
});
/*
export default component$(() => {
  return (
    <>
      
    </>
  );
});
*/
export const head: DocumentHead = {
  title: "tabulator",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
