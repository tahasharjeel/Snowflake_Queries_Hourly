let query0 = "select count(distinct(source_msg_payload)) as cnt, '";
let query01 = "' as time , CURRENT_TIMESTAMP() as RAW_EXEC_TS_UTC from (select INGESTION_ID, INGESTION_TS,RECORD_CONTENT:dsat_mw_gd_timestamp::timestamp as gd_api_date, RECORD_CONTENT:dsat_mw_gd_id as source_msg_payload from ";
let query1 = " where gd_api_date >= '";
let query2 = "' and gd_api_date <= '";
let query3 = "')";
let queries = [];
let schema = "";
const hours = [
  "T00:00:00" ,
  "T01:00:00" ,
  "T02:00:00" ,
  "T03:00:00" ,
  "T04:00:00" ,
  "T05:00:00" ,
  "T06:00:00" ,
  "T07:00:00" ,
  "T08:00:00" ,
  "T09:00:00" ,
  "T10:00:00" ,
  "T11:00:00" ,
  "T12:00:00" ,
  "T13:00:00" ,
  "T14:00:00" ,
  "T15:00:00" ,
  "T16:00:00" ,
  "T17:00:00" ,
  "T18:00:00" ,
  "T19:00:00" ,
  "T20:00:00" ,
  "T21:00:00" ,
  "T22:00:00" ,
  "T23:00:00" ,
  "T23:59:59"
];

const range = [
  "00-01" ,
  "01-02" ,
  "02-03" ,
  "03-04" ,
  "04-05" ,
  "05-06" ,
  "06-07" ,
  "07-08" ,
  "08-09" ,
  "09-10" ,
  "10-11" ,
  "11-12" ,
  "12-13" ,
  "13-14" ,
  "14-15" ,
  "15-16" ,
  "16-17" ,
  "17-18" ,
  "18-19" ,
  "19-20" ,
  "20-21" ,
  "21-22" ,
  "22-23" ,
  "23-24"
];

function mobiletier(){
  schema = "PD_SERVICE_RAW.EDGE_MOBILETIER.EVENT";
  document.getElementById("ss").innerHTML = "EDGE MOBILETIER";
}

function customer(){
  schema = "PD_SERVICE_RAW.EDGE_CUSTOMER.EVENT";
  document.getElementById("ss").innerHTML = "EDGE CUSTOMER";
}

function launchpad(){
  schema = "PD_SERVICE_RAW.EDGE_LAUNCHPAD.EVENT";
  document.getElementById("ss").innerHTML = "EDGE LAUNCHPAD";
}

function portfolio(){
  schema = "PD_SERVICE_RAW.EDGE_PORTFOLIO.EVENT";
  document.getElementById("ss").innerHTML = "EDGE PORTFOLIO";
}

function ecams(){
  schema = "PD_SERVICE_RAW.EDGE_ECAMS.EVENT";
  document.getElementById("ss").innerHTML = "EDGE ECAMS";
}

function councelor(){
  schema = "PD_SERVICE_RAW.EDGE_COUNSELOR.EVENT";
  document.getElementById("ss").innerHTML = "EDGE COUNSELOR";
}

function medsasb(){
  schema = "PD_SALES_RAW.MEDSASB.MOATEVENTS";
  document.getElementById("ss").innerHTML = "MEDS ASB";
}

function myFunction() {
  if(schema != "" && document.getElementById("Date").value != ""){
    var date = document.getElementById("Date").value;
    //let query = query1 + "" + date + "" + query2 + "" + date + "" + query3;
    for(let i=0;i<24;i++){
      queries[i] = query0 + "" + range[i] + "" + query01 + "" + schema + "" + query1 + "" + date + "" + hours[i] + "" + query2 + "" + date + "" + hours[i+1] + "" + query3;
    }
    for(let i=0;i<24;i++){
      if(i<10){
        document.getElementById("0"+i).innerHTML = queries[i];
      }
      else{
        document.getElementById(i).innerHTML = queries[i];
      }
    }
    let union = "";
    for(let i=0;i<23;i++){
      union = union + queries[i] + " union " + "\n";
    }
    union = union + queries[23];
    document.getElementById("union").innerHTML = union;
    console.log(date);
    console.log(union);
  }
  else{
    alert("Select source and date");
  }
}

function copy00(){
  navigator.clipboard.writeText(queries[0]);
}
function copy01(){
  navigator.clipboard.writeText(queries[1]);
}
function copy02(){
  navigator.clipboard.writeText(queries[2]);
}
function copy03(){
  navigator.clipboard.writeText(queries[3]);
}
function copy04(){
  navigator.clipboard.writeText(queries[4]);
}
function copy05(){
  navigator.clipboard.writeText(queries[5]);
}
function copy06(){
  navigator.clipboard.writeText(queries[6]);
}
function copy07(){
  navigator.clipboard.writeText(queries[7]);
}
function copy08(){
  navigator.clipboard.writeText(queries[8]);
}
function copy09(){
  navigator.clipboard.writeText(queries[9]);
}
function copy10(){
  navigator.clipboard.writeText(queries[10]);
}
function copy11(){
  navigator.clipboard.writeText(queries[11]);
}
function copy12(){
  navigator.clipboard.writeText(queries[12]);
}
function copy13(){
  navigator.clipboard.writeText(queries[13]);
}
function copy14(){
  navigator.clipboard.writeText(queries[14]);
}
function copy15(){
  navigator.clipboard.writeText(queries[15]);
}
function copy16(){
  navigator.clipboard.writeText(queries[16]);
}
function copy17(){
  navigator.clipboard.writeText(queries[17]);
}
function copy18(){
  navigator.clipboard.writeText(queries[18]);
}
function copy19(){
  navigator.clipboard.writeText(queries[19]);
}
function copy20(){
  navigator.clipboard.writeText(queries[20]);
}
function copy21(){
  navigator.clipboard.writeText(queries[21]);
}
function copy22(){
  navigator.clipboard.writeText(queries[22]);
}
function copy23(){
  navigator.clipboard.writeText(queries[23]);
}
function copyUnion(){
  navigator.clipboard.writeText(union);
}




/*select count(distinct(source_msg_payload)) as cnt, '00-01' as time , CURRENT_TIMESTAMP() as RAW_EXEC_TS_UTC
from (select INGESTION_ID, INGESTION_TS,RECORD_CONTENT:dsat_mw_gd_timestamp::timestamp
as gd_api_date, RECORD_CONTENT:dsat_mw_gd_id as source_msg_payload from PD_SERVICE_RAW.EDGE_MOBILETIER.EVENT
where gd_api_date >= '2022-07-18T00:00:00' and gd_api_date <= '2022-07-18T01:00:00')*/
