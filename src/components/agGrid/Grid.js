import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const sectionStyle = {
  width: 600,
  height: 400,
  margin: '0 auto'
};

const Grid = () => {
  const rowData = [
    {
      otn_inventory_id: 1,
      desc1: '',
      desc1_date: '',
      desc1_date_label: '',
      desc1_user: '',
      desc1_user_name: '',
      desc2: '',
      desc2_date: '',
      desc2_date_label: '',
      desc2_user: '',
      desc2_user_name: '',
      ems_id: '200009',
      global_node_id: 'WOORINET.otn.EMS_1000_B',
      ip: '10.1.179.102',
      laserofffarendfail: '',
      ne_hname: '',
      ne_id: 'WOORINET.otn.EMS_1000_B',
      ne_name: 'EMS_1000_B',
      ne_type: '',
      new_port: '1',
      pec1: '',
      pec2: '',
      port_no: '1',
      pst: 'down',
      ring_name: '',
      ser1: 'PL1X130756',
      shelf_name: 'EMS_1000_B',
      shelf_no: '1',
      slot_no: 'S03',
      unit_dist: '10.0 Km',
      unit_type1: 'O208CLU',
      unit_type2: '',
      vendor: 'WOORI-NET',
      llcf: '',
      line_name: '',
      update_date: '2021-05-11_03:00:00',
      ctype: ''
    },
    {
      otn_inventory_id: 2,
      desc1: '',
      desc1_date: '',
      desc1_date_label: '',
      desc1_user: '',
      desc1_user_name: '',
      desc2: '',
      desc2_date: '',
      desc2_date_label: '',
      desc2_user: '',
      desc2_user_name: '',
      ems_id: '200009',
      global_node_id: 'WOORINET.otn.EMS_1000_B',
      ip: '10.1.179.102',
      laserofffarendfail: '',
      ne_hname: '',
      ne_id: 'WOORINET.otn.EMS_1000_B',
      ne_name: 'EMS_1000_B',
      ne_type: '',
      new_port: '2',
      pec1: '',
      pec2: '',
      port_no: '2',
      pst: 'down',
      ring_name: '',
      ser1: 'PL1X130009',
      shelf_name: 'EMS_1000_B',
      shelf_no: '1',
      slot_no: 'S03',
      unit_dist: '10.0 Km',
      unit_type1: 'O208CLU',
      unit_type2: '',
      vendor: 'WOORI-NET',
      llcf: '',
      line_name: '',
      update_date: '2021-05-11_03:00:00',
      ctype: ''
    }
  ];
  const fields = Object.keys(rowData[0]);
  return (
    <section className="ag-theme-alpine" style={sectionStyle}>
      <AgGridReact rowData={rowData}>
        {fields.map(field => (
          <AgGridColumn key={field} field={field}></AgGridColumn>
        ))}
      </AgGridReact>
    </section>
  );
};

export default Grid;
