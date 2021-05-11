import React, { useEffect, useRef, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const sectionStyle = {
  width: 960,
  height: 400,
  margin: '0 auto'
};

const Grid = () => {
  const sample = useRef({
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
  });
  const [rowData, setRowData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRowData = async () => {
      try {
        setRowData(null);
        setError(null);
        setLoading(true);

        const response = await axios.get(
          'http://121.126.223.246:8888/v1/tn/inventory',

          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
            }
          }
        );
        setRowData(response.data);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };
    fetchRowData();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) return <div>에러</div>;

  if (!rowData) return null;

  console.log(rowData);
  const fields = Object.keys(rowData[0]);
  return (
    <section className="ag-theme-alpine" style={sectionStyle}>
      <AgGridReact rowData={rowData}>
        {fields.map(field => (
          <AgGridColumn key={field} field={field} sortable={true} filter={true}></AgGridColumn>
        ))}
      </AgGridReact>
    </section>
  );
};

export default Grid;
